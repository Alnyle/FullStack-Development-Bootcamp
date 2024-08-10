import React from 'react';
import Button from '../components/Button';
import {products} from '../constants/index.js'
import { shoe8 } from '../assets/images/index.js';


const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl
        capitalize lg:max-w-lg font-bold">
          <span className="xl:bg-white
              xl:whitespace-nowrap relative z-10 pr-10">We Provide You</span>
          <br />
          <span className="text-coral-red">Super</span> 
          <span className="text-coral-red"> Quality</span> 
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">
        Experience excellence at its finest with our meticulously 
        crafted products at Shoesify.
         using premium materials and innovative designs to ensure unmatched durability and performance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
        
        Our commitment to superior craftsmanship and customer satisfaction is evident in every product we offer
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img 
          src={shoe8} 
          width={570}
          height={522} alt="shoe8" />
      </div>
    </section>
  )
}

export default SuperQuality