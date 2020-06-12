import React from 'react';
import HeaderLeft from './header-left';
import HeaderBar from './header-bar';

const Header = () => (
  <nav className="flex h-16">
    <HeaderLeft />
    <HeaderBar />
  </nav>
);

export default Header;