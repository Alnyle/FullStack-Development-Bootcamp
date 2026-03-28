import React from 'react'

const Button = ({label, iconURL,backgroundColor,
  borderColor, textColor, fullWidth
 }) => {
  return (
    <button className={`flex
     justify-center items-center
      gap-2 px-7 py-4 border 
      fo nt-montserrat text-lg 
      leading-none rounded-full

      ${
        fullWidth && 'w-full'
      }
      
      ${backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}`
       : 'bg-red-500 text-white border-coral-red'} `}>

        {label}
        {iconURL &&  <img 
            src={iconURL} 
            alt="arrow right icon"
            className="ml-2 rounded-full w-5 h-5" />

        }
    </button>
  )
}

export default Button