import React from 'react';
import Navbar from './components/Navbar';
import { Hero, Companies, Residencies, Values, ContactUs, GetStart, Footer } from './sections/index';


const App = () => {
  return (
    <div className=''>
      <Navbar/>
      <section className="px-14 sm:p-16 lg:px-16">
        <Hero/>
      </section>
      <section className="bg-gray-100">
        <Companies/>
      </section>
      <section>
        <Residencies/>
      </section>
      <section>
        <Values/>
      </section>
      <section className="mt-20 mb-20">
        <ContactUs/>
      </section>
      <section className="mb-20">
        <GetStart/>
      </section>
      <footer>
        <Footer/>
      </footer>
    
    </div>
  )
}

export default App