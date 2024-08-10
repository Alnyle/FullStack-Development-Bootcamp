import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button';
import { arrowRight } from '../assets/icons';

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center
     max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} width={773} height={687}
        className="object-contain w-full" alt="" />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl
        capitalize lg:max-w-lg font-bold">
          <span className="text-coral-red">Special </span> 
          offer
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">
        Experience excellence at its finest with our meticulously 
        crafted products at Shoesify.
         using premium materials and innovative designs to ensure unmatched durability and performance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
        
        Our commitment to superior craftsmanship and customer satisfaction is evident in every product we offer
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button label="Learn more" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray" />
        </div>
      </div>

    </section>
  )
}

export default SpecialOffer