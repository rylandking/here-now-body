import React from 'react';
import HeaderLeft from './header-left';
import HeaderBar from './header-bar';
// import useScript from '../hooks/useScript';

export default function Header() {
  // useScript('https://emailoctopus.com/bundles/emailoctopuslist/js/1.5/formEmbed.js');
  // useScript('https://emailoctopus.com/bundles/emailoctopuslist/js/1.5/recaptcha.js');

  return (
    <nav className="flex h-16">
      <HeaderLeft />
      <HeaderBar />
    </nav>
  );
}