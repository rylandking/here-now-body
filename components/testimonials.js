import React from 'react';
import Testimonial from './testimonial';

export default function Testimonials({testimonialData}) {
  testimonialData[0].spacing = 'mr-0 md:mr-4';
  testimonialData[1].spacing = 'mt-10 md:ml-10 md:mt-0';
  
  return (
    <div className="max-w-2xl mx-auto mt-16 mb-32 px-8 sm:px-24 md:px-12 md:flex w-full">
      {testimonialData.map((testimonial) => (
        <Testimonial
          key={testimonial.url}
          name={testimonial.name}
          workTitle={testimonial.workTitle}
          image={testimonial.image}
          quote={testimonial.quote}
          url={testimonial.url}
          spacing={testimonial.spacing}
        />
      ))}
    </div>
  )
}