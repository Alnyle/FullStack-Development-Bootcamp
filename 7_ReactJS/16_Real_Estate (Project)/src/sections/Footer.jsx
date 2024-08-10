import React from 'react'
import { footerLinks } from '../constants/index'
const Footer = () => {
  return (
    <div className="md:max-w-5xl max-w-xl pb-20 mx-auto px-4 sm:px-2">
        <div className="flex sm:flex-row  flex-col justify-center sm:justify-between items-center px-5">
            <div className="flex flex-col items-center sm:items-start  justify-between">
                <div className="flex items-center flex-shrink-0">
                    <span className="text-2xl text-blue-600 font-bold">REFINE</span>
                </div>
                <div className="mt-4">
                    <p className="text-md text-gray-500">Our vision is to make all people</p>
                    <p className="text-md text-gray-500">the best place to live for them.</p>
                </div>
            </div>

            <div className="flex gap-6 flex-col mt-6 items-center sm:items-start">
                <div className="text-center sm:text-start">
                    <h1 className="md:text-3xl text-2xl font-bold text-blue-900">Information</h1>
                    <p className="text-gray-500 mt-2">145 New York, FL 5467, USA</p>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center gap-4 w-full">
                    {footerLinks.map((link, index) => (
                        <li key={index} className="font-medium text-lg">
                            <a href={link.href}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    </div>
  )
}

export default Footer