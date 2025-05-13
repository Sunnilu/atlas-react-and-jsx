import React from 'react';
import Greeting from './Greeting';
import SocialLinks from './SocialLinks';

function Header() {
  return (
    <nav className="header-nav">
      <Greeting />
      <SocialLinks />
    </nav>
  );
}

export default Header;


