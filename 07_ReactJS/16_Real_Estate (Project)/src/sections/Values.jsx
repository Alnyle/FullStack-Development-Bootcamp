import React, {useState} from 'react';
import value from '../assets/value.png';
import { valuesInfo } from '../constants';
import ValueElement from '../components/ValueElement';

import { HiShieldCheck } from "react-icons/hi2";


const Values = () => {

  const [ActiveCardIndex, setActiveCardIndex] = useState(0);

  const handleCardClick = (index) => {
    setActiveCardIndex(index === ActiveCardIndex ? null : index);
  }

  return (
    <div className="sm:max-w-5xl max-w-sm mx-auto px-4 sm:px-2">
        <div className="flex flex-col md:flex-row gap-6 px-2 sm:px-2">
            <div className="w-full md:w-1/2 h-[470px] justify-center flex lg:justify-normal">
                <img src={value} alt="value" className="h-full object-contain rounded-t-full"/>
            </div>

            <div className="w-full md:w-1/2">
                <div>
                    <div >
                        <h2 className="text-lg md:text-xl font-bold text-amber-500">Our Values</h2>
                        <h1 className="text-blue-900 text-xl sm:text-2xl font-bold mt-3">Value We Give to You</h1>
                    </div>
                    <div className="mt-4 flex flex-col">
                        <p className="text-sm text-gray-500">We always ready to help by providijng the best services for you.</p>
                        <p className="text-sm text-gray-500">We beleive a good blace to live can make your life better</p>
                    </div>
                </div>

                <div className="flex flex-col mt-10 gap-3">
                    {valuesInfo.map((value, index) => (
                        <ValueElement 
                        icon={value.icon} 
                        title={value.title} 
                        description={value.description} 
                        onClick={ () => handleCardClick(index)}
                        isActive={index === ActiveCardIndex}
                        key={index}/>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Values