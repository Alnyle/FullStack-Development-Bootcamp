import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { url } from '../App';
import { toast } from 'react-toastify';
const ListSong = () => {

  const [data, setData] = useState([]);

  const fetchData = async () => {

    try {

      const response = await axios.get(`${url}/api/song/list`);
      if (response.data) {
        console.log(response.data)
        setData(response.data.songs)
      }

    } catch(error) {
      console.error(error)
    }
  }

  const removeSong = async(id) => {

    try {

      const formData = new FormData();
      formData.append('id', id)

      const response = await axios.post(`${url}/api/song/remove`, {id});

      if (response.data.success) {
        toast.success(response.data.message);
        await fetchData();
      } 
    } catch(error) {
      toast.error('Error occured')
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <p>All Songs List</p>
      <br />
      <div>
        <div className='sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100'>
          <b>Image</b>
          <b>Name</b>
          <b>Album</b>
          <b>Duration</b>
          <b>Action</b>
        </div>
        {data.map((item, index) => (
          <div key={index} className='grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr]  items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5'>
            <img className='w-12' src={item.image} alt="" />
            <p>{item.name}</p>
            <p>{item.album}</p>
            <p>{item.duration}</p>
            <button onClick={() => removeSong(item._id)}>x</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListSong