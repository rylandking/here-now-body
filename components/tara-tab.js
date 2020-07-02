import React from 'react';
import Link from 'next/link'

export default function TaraTab({authors}) {

  return (
    <Link href="/about">
      <a>
        <div className="hidden md:flex fixed h-12 w-40 bottom-0 right-0 justify-center border rounded bg-white text-base font-light bg-white">
          <div className="flex h-full justify-center">
            <div className="flex-shrink-0 self-center pr-2">
              <img
                className="h-8 w-8 rounded-full"
                src={authors[0].picture}
                alt={`${authors[0].name} of Here Now Body`}
              />
            </div>
            <span className="self-center"> by {authors[0].name}</span>
          </div>
        </div>
      </a>
    </Link>
  )
}
