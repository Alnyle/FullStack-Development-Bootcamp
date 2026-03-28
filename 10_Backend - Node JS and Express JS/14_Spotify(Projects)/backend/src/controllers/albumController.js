import { v2 as cloudinary } from 'cloudinary';
import albumModel from '../models/albumModel.js';
import asyncHandler from "express-async-handler";


export const addAlbum = asyncHandler(async (req, res) => {

    if (req.body && req.file) {
        
        const name = req.body.name;
        const desc = req.body.desc;
        const bgColor = req.body.bgColor;
        const imageFile = req.file;
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type: "image"});


        const albumData = await albumModel.create({
            name,
            desc,
            bgColor,
            image: imageUpload.secure_url
        }) 

        if (albumData) {
            res.json({success: true, message: "album added"})
        } else {
            res.json({success: false})

        }
    } else {
        res.json({success: false})
    }



    
})

export const listAlbum = asyncHandler(async (req, res) => {

    const allAlbum = await albumModel.find({});
    if (albumModel) {
        res.json({success: true, albums: allAlbum});
    } else {
        res.json({success: false})
    }

})



export const removeAlbum = asyncHandler(async (req, res) => {

    const album = await albumModel.findById(req.body.id);

    if (album) {
        await albumModel.findByIdAndDelete(req.body.id);
        res.json({success: true, message: "Album removed"});
    } else {
        res.json({success: false})
    }

})