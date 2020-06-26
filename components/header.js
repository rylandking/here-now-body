import React from 'react';
import HeaderLeft from './header-left';
import HeaderBar from './header-bar';

export default function Header() {

  return (
    <nav className="flex h-16">
      <HeaderLeft />
      <HeaderBar />
    </nav>
  );
}