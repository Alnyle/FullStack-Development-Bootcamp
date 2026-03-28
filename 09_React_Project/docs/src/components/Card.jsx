import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

const Card = ({ desc, fileSize, close, tag  }) => {
  return (
    <div className="relative w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden">
        <FaRegFileAlt />
        <p className='text-sm mt-5 leading-tight font-semibold'>{desc}</p>
        <div className="footer absolute bottom-0 w-full left-0">
            <div className='flex items-center justify-between px-8 py-3  mb-3'>
                <h5>{fileSize }</h5>
                <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center  justify-center'>
                    { close ? <IoClose /> : <LuDownload size=".8em" color="#fff  "/> }
                </span>

            </div>

            {
                tag.isOpen &&
                <div className={`tag w-full py-4 bg-green-600 flex items-center justify-center`}>
                    <h3 className="text-md">{tag.tagTitle}</h3>
                </div>
          
            }

    
        </div>

    </div>

  )
}

export default Card