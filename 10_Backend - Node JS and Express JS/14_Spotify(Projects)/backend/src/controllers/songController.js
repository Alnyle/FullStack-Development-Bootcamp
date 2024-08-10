import asyncHandler from "express-async-handler";
import { v2 as cloudinary } from 'cloudinary';
import songModel from '../models/songModel.js'

// @des  Get all songs
// route GET /api/songs
//@access public

export const getSong = asyncHandler(async (req, res) => {

    res.status(200).json({ message: 'get all song' })
})


export const addSong = asyncHandler(async (req, res) => {

    const name = req.body.name;
    const desc = req.body.desc;
    const album = req.body.album;
    const audioFile = req.files.audio[0]
    const imageFile = req.files.image[0]


    const audioUpload = await cloudinary.uploader.upload(audioFile.path, {resource_type: "video"});
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type: "image"});
    const duration = `${Math.floor(audioUpload.duration/60)}:${Math.floor(audioUpload.duration%60)}`


    console.log('first')

    const songData = await songModel.create({
        name,
        desc,
        album,
        image: imageUpload.secure_url,
        file: audioUpload.secure_url,
        duration,
    })



    if(songData) {
        res.status(200).json({
            name: songData.name,
            desc: songData.desc,
            album: songData.album,
            image: songData.image,
            file: songData.file,
            duration: songData.duration,
        });
    } else {
        res.status(400)
        throw new Error('Invalid Song data');
    }

})



export const listSong = asyncHandler(async(req, res) => {

    const allSongs = await songModel.find({});
    if (allSongs) {
        res.json({success: true, songs: allSongs})
    } else {
        res.json({success: false})
    }

})


export const removeSong = asyncHandler(async (req, res) => {

    console.log(req.body)

    const songOb = await songModel.findById(req.body.id);
    console.log(songOb)
    if (songOb) {
        await songModel.findByIdAndDelete(req.body.id);
        res.json({success: true, message: "Song removed"});
    } else {
        res.json({success: false})
    }
})