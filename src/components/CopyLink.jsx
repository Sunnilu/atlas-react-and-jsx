import React from 'react';
import copyIcon from '../assets/copy.svg';

function CopyLink({ link }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(link).then(() => {
      console.log(`Copied to clipboard: ${link}`);
    }).catch((err) => {
      console.error('Failed to copy:', err);
    });
  };

  return (
    <img
      className="copy"
      src={copyIcon}
      alt="Copy link"
      onClick={copyToClipboard}
      style={{ cursor: 'pointer', marginLeft: '0.5rem' }}
    />
  );
}

export default CopyLink;
