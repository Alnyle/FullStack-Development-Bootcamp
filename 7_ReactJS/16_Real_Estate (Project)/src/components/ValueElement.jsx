import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

const ValueElement = ( {icon, title, description, onClick, isActive } ) => {
  return (
    <div className="flex flex-col rounded-sm border p-4 gap-4">
        <div className="w-full flex flex-row justify-between items-center">
            <div className="text-indigo-500 bg-indigo-50 p-2 rounded-sm">
                {icon}
            </div>
            <p className="text-xs sm:text-base font-bold text-gray-700">{title}</p>
            <div className="text-indigo-500 bg-indigo-50 p-2 rounded-sm" onClick={onClick}>
                <IoIosArrowDown />
            </div>
        </div>

        {
            isActive &&  (
            <p className="text-xs sm:text-sm text-gray-500">
                {description}
            </p>
            )
        }
    </div>
  )
}

export default ValueElement