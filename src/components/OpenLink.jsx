import React from 'react';
import openIcon from '../assets/open.svg';

function OpenLink({ link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={openIcon} alt="Open link" />
    </a>
  );
}

export default OpenLink;

