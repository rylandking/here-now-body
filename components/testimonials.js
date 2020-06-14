import React from 'react';
import Testimonial from './testimonial';

export default function Testimonials() {
  return (
    <div className="max-w-2xl mx-auto mt-16 mb-32 px-16 sm:px-24 md:px-12 md:flex w-full">
      <div className="block md:w-1/2 mr-0 md:mr-4">
        <Testimonial />
      </div>
      <div className="block md:w-1/2 ml-0 md:ml-4 mt-4 md:mt-0">
        <Testimonial />
      </div>
    </div>
  )
}