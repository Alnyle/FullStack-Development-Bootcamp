import React from 'react';
import PopularProductCard from '../components/PopularProductCard.jsx';
import {products} from '../constants/index.js'
const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold"><span className="text-coral-red">Popular</span> Products</h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Discover Our Most Popular Products: 
          From Best-Selling Items to Must-Have
           Essentials, Find What Everyone is
            Talking About This Season
        </p>
      </div>

      <div className="mt-16 gap-2 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product}/>
        ))}
      </div>

    </section>
  )
}

export default PopularProducts