import React from 'react'
import { motion } from "framer-motion"

const Button = ( { paddingX, paddingY, Content } ) => {
  return (
    <>
      <motion.button className="bg-blue-600  w-1/4 flex items-center justify-center 
                    text-white rounded-sm text-center" whileHover={{ scale: 1.1 }}>
            <a className={`text-center ${paddingX} ${paddingY} text-sm `}>{Content}</a>
      </motion.button>    
    </>
  )
}

export default Button

// 