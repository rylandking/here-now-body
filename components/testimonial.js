import React from 'react';

export default function Testimonial({name, workTitle, image, quote, url, spacing}) {

  return (
    <>
    <div className={`block md:w-1/2 ${spacing}`}>
      <div className="flex justify-start text-sm font-light italic">{quote}</div>
      <a href={url} target="_blank">
      <div className="flex justify-start mt-4">
        <img
          className="h-10 w-10 ml-1 mr-3 rounded-full"
          src={image}
          alt=""
        />
        <div className="block">
          <p className="font-semibold">{name}</p>
          <p className="font-light text-sm">{workTitle}</p>
        </div>
      </div>
      </a>
    </div>
    <style jsx>{`
        a {
          text-decoration: none;
        }
    `}</style>
    </>
  )
}