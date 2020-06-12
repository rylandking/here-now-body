import React, { Fragment } from 'react';
import Link from 'next/link';

const HeaderLeft = () => (
  <Fragment>
    <Link href="/">
      <div className="w-1/4 md:w-56 flex pl-4 items-center flex-shrink-0 border-b md:border-r md:border-b-0 cursor-pointer">
        <div className="rounded-full h-10 w-10 flex items-center justify-center bg-purple-600">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 fill-current text-white"
          >
            <path
              d="M4.31802 6.31802C2.56066 8.07538 2.56066 10.9246 4.31802 12.682L12.0001 20.364L19.682 12.682C21.4393 10.9246 21.4393 8.07538 19.682 6.31802C17.9246 4.56066 15.0754 4.56066 13.318 6.31802L12.0001 7.63609L10.682 6.31802C8.92462 4.56066 6.07538 4.56066 4.31802 6.31802Z"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span className="ml-3 font-bold hidden tracking-wide md:flex text-gray-900">
          Here Now Body
        </span>
      </div>
    </Link>
  </Fragment>
);

export default HeaderLeft;
