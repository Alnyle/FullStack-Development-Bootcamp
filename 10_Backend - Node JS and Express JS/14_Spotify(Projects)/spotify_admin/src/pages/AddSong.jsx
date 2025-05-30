import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios';
import { url } from '../App';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';

const AddSong = () => {

  const [image, setImage] = useState(false);
  const [song, setSong] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [album, setAlbum] = useState("none");
  const [loading, setLoading] = useState(false);
  const [albumData, setAlbumData] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {

      const formData = new FormData();

      formData.append('name', name);
      formData.append('desc', desc);
      formData.append('image', image);
      formData.append('audio', song);
      formData.append('album', album);
  
      const response = await axios.post(`${url}/api/song/add`, formData);
  
      if (response) {
        toast.success("Song added");
        setName("");
        setDesc("");
        setAlbum("none");
        setImage(false);
        setSong(false);
      } else {
        toast.error("Something want wrong")
      }

    } catch(error) {
      console.error(error)
    }
    setLoading(false); 
    
  }

  const loadAlbumData = async () => {

    try {

      const response = await axios.get(`${url}/api/album/list`);

      if (response.data.success) {
        setAlbumData(response.data.albums)
      } else {
        toast.error("Unable to load album data");
      }

    } catch(error) {
      console.error("Error ocurr");
    }
  }

  useEffect(() => {
    loadAlbumData();
  }, [])

  return loading ? <Loader/> : (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-start gap-8 text-gray-600 pb-6">
      <div className="flex gap-8">
        <div className="flex flex-col gap-4">
          <p>Upload song</p>
          <input onChange={(e) => setSong(e.target.files[0])} type="file" name="song" id="song" accept='audio/*' hidden/>
          <label htmlFor="song">
            <img src={song ? assets.upload_added : assets.upload_song} className='w-24 cursor-pointer' alt="" />
          </label>
        </div>
        <div className="flex flex-col gap-4">
          <p>Upload image</p>
          <input onChange={(e) => setImage(e.target.files[0])} type="file" name="image" id="image" accept='image/*' hidden/>
          <label htmlFor="image">
            <img src={image ? URL.createObjectURL(image) : assets.upload_area} className='w-24 cursor-pointer' alt="" />
          </label>
        </div>
      </div>

      <div className='flex flex-col gap-2.5'>
        <p>Song name</p>
        <input type="text" onChange={(e) => setName(e.target.value)} value={name} className='bg-transparent border-2 border-gray-400 focus:border-green-600 p-2.5 w-[max(40vw, 250px)]' placeholder='Type Here' required/>
      </div>
      <div className='flex flex-col gap-2.5'>
        <p>Song description</p>
        <input type="text" onChange={(e) => setDesc(e.target.value)} value={desc}  className='bg-transparent border-2 border-gray-400 focus:border-green-600 p-2.5 w-[max(40vw, 250px)]' placeholder='Type Here' required/>
      </div>

      <div className='flex flex-col gap-2.5'>
        <p>Album</p>
        <select onChange={(e) => setAlbum(e.target.value)} defaultValue={album} name="" id="" className='bg-transparent border-2 border-gray-400 focus:border-green-600 p-2.5 w-[150px]'>
          {albumData.map((item, index) => (
            <option value={item.name}>{item.name}</option>
          ))}
        </select>
      </div>

      <button type='submit' className='text-base bg-black text-white py-2.5 px-14 cursor-pointer'>ADD</button>
    </form>
  )
}

export default AddSong