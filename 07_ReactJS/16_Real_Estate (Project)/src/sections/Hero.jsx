import React from 'react';
import { heroContent } from '../constants';
// import { heroContent } from '../constants';
import { TiLocation } from "react-icons/ti";
import Button from '../components/Button';
import heroImage from '../assets/heroImage.png';

const Hero = () => {
  return (
    <section className="lg:max-w-3xl max-w-sm mx-auto gap-20 flex flex-col lg:flex-row justify-center mt-15">
        <div className="flex flex-col gap-12 w-full lg:w-1/2">
            <div className="text-5xl font-bold">
                <p>Discover</p>
                <p>Most Suitable</p>
                <p>Property</p>
            </div>

            <div className="">
                <p>{heroContent.subtitle1}</p>
                <p>{heroContent.subtitle2}</p>
            </div>

            <div className="flex flex-row items-center py-2 px-3 border-2 border-slate-400 bg-white rounded-md">
                <TiLocation size={24} color="rgb(37 99 235 / var(--tw-bg-opacity))"/>
                <input type="text" className="w-3/4 outline outline-0 focus:outline-0" />
                <Button paddingX= "px-2" paddingY ="py-[6px] " Content={"Search"}/>
            </div>

            <div className="flex flex-row flex-wrap sm:flex-nowrap gap-4 w-full">
                {heroContent.tags.map((item, index) => (
                    <div key={index} className="text-center flex flex-col gap-1">
                        <p className="text-3xl font-semibold">{item.statis} <span className="text-yellow-500">+</span></p>
                        <p className="text-sm">{item.name}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className="lg:w-1/2 w-full">
            <img 
                src={heroImage} 
                alt="houses" 
                className="h-full object-cover rounded-t-full 
                border-8"/>
        </div>



    </section>
  )
}

export default Hero