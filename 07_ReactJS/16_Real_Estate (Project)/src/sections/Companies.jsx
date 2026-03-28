import React from 'react'
import  { companiesLogo } from '../assets/index'

const Companies = () => {
  return (
    <div className="mt-20 py-10 lg:max-w-3xl max-w-sm mx-auto ">
      <div className="flex flex-col justify-between items-center lg:flex-row gap-4">
        {companiesLogo.map((logo, index) => (
          <div key={index} className="w-28">
            <img 
              src={logo.src} 
              alt={logo.alt} className="w-full h-full object-cover"/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Companies