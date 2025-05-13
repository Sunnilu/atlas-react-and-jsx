import React from 'react';
import linkedinIcon from '../assets/linkedin.svg';
import githubIcon from '../assets/github.svg';

function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href="https://www.linkedin.com/in/suntha-lucas-657152290/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedinIcon} alt="LinkedIn Profile" />
      </a>
      <a
        href="https://github.com/Sunnilu/atlas-react-and-jsx.git"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={githubIcon} alt="GitHub Repository" />
      </a>
    </div>
  );
}

export default SocialLinks;

