import React from 'react';

export default function Testimonial() {
  return (
    <>
      <div className="flex justify-start text-sm font-light">Hands down the best marketing newsletter I'm subscribed to.</div>
      <a href="" target="_blank">
      <div className="flex justify-start mt-3">
        <img
          className="h-10 w-10 ml-1 mr-3 rounded-full"
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <div className="block">
          <p className="font-semibold">Ryland King</p>
          <p className="font-light text-sm">Physical Therapist, M.D.</p>
        </div>
      </div>
      </a>
      
      <style jsx>{`
          a {
            text-decoration: none;
          }
      `}</style>
    </>
  )
}