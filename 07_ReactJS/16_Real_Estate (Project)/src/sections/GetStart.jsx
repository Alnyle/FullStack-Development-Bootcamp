import React from 'react'
import { motion } from 'framer-motion'

const GetStart = () => {
  return (
    <div className="md:max-w-5xl max-w-xl mx-auto px-4 sm:px-2">
        <div className="flex flex-col items-center 
        justify-center py-7  bg-indigo-600 rounded-lg border-4 border-indigo-300">
            <div className="flex flex-col justify-center items-center max-w-lg text-center">
                <h1 className="text-white text-3xl font-medium">Get started with Refine</h1>
                <div className="flex flex-col justify-center items-center text-blue-300 mt-5">
                    <p>Subscribe and find super attractive price quotes from us.</p>
                    <p>Find your residence soon</p>
                </div>
                <motion.button 
                    className="mt-5 py-2 px-4 bg-indigo-500 border-2 rounded-lg text-sm text-white font-medium"
                    whileHover={{ scale: 1.1 }}>
                    Get Started
                </motion.button>
            </div>
        </div>
    </div>
  )
}

export default GetStart