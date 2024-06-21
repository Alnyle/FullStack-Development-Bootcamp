import React from 'react'
import { services } from '../constants/index.js'
import ServiceCard from '../components/ServiceCard.jsx'
const Service = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((Service) => (
        <ServiceCard  key={Service.label} {...Service}/>
      ))

      }
    </section>
  )
}

export default Service