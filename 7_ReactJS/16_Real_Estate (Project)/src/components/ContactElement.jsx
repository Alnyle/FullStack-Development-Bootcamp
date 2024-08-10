import React from 'react'
import { motion } from "framer-motion"

const ContactElement = ( { icon, title, number, btn } ) => {
    return (
      <motion.div whileHover={{ scale: 1.08 }} className="flex flex-col gap-4  p-2 border rounded-sm hover:shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
          <div className="flex flex-row gap-4">
              <div className="text-indigo-500 bg-indigo-50 px-4  rounded-sm flex justify-center items-center">
                  {icon}
              </div>
              <div className="flex flex-col gap-0 flex-1">
                  <p className="text-md font-bold">{title}</p>
                  <p className="text-xs text-gray-500">{number}</p>
              </div>
          </div>  
  
          <motion.div 
            className="text-center bg-indigo-100 text-indigo-700 
             hover:bg-indigo-500 hover:text-white rounded"
            whileHover={{ scale: .95 }}>
              <p className="font-semibold text-xs py-2">{btn}</p>
          </motion.div>
      </motion.div>
    )
  }
  

export default ContactElement