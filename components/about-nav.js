import React from 'react'
import HeaderLeft from './header-left';
import HeaderBar from './header-bar';

export default function AboutNav({menuItems}) {
  return (
    <div class="relative bg-white">
      <div class="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
        <HeaderLeft />
        <HeaderBar
          menuItems={menuItems}
        />
      </div>
    </div>
  )
}