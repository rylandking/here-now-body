import React from 'react'
import HeaderLeft from './header-left';
import HeaderBar from './header-bar';

export default function AboutNav({menuItems}) {
  return (
    <div className="relative bg-white">
      <div className="flex justify-between items-center px-4 py-2 sm:py-4 sm:px-6 md:justify-start md:space-x-10">
        <HeaderLeft />
        <HeaderBar
          menuItems={menuItems}
        />
      </div>
    </div>
  )
}