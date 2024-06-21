import React from 'react'
import { reviews } from '../constants/index'
import ReviewCard from '../components/ReviewCard'
const CustomerReviews = () => {
  return (
    <section>
      <div className="max-container">
        <h3 className="font-palanquin text-center text-4xl font-bold">
          What Our
          <span className="text-coral-red"> Customers </span>
          Say?
        </h3>

        <p className="info-text m-auto mt-4 max-w-lg">
          Hear genuine Stories from our satisfied 
          customers about their exceptional experience with us.
        </p>

        <div className="mt-24  flex flex-1 justify-evenly items-center">
          {reviews.map((review) => (
            <ReviewCard key={review.customerName}
            imgURL={review.imgURL} 
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CustomerReviews