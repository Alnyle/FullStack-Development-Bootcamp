import React from 'react'
import { useNavigate } from 'react-router-dom'

const AlbumItem = ({ image, name, desc, id }) => {

  const navigate = useNavigate()

  return (
    <div onClick={() => navigate(`/album/${id}`)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <div className="w-full">
          <img src={image} alt="Album image" className="size-full object-cover aspect-square rounded" />
        </div>
        <div className='flex flex-col mt-2 gap-1'>
          <p className="font-bold mt-2">{name}</p>
          <p className="text-slate-200">{desc}</p>
        </div>
    </div>
  )
}

export default AlbumItem