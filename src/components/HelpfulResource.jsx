import React from 'react';
import OpenLink from './OpenLink';
import CopyLink from './CopyLink';

function HelpfulResource({ link, label }) {
  return (
    <div className="helpful-resource">
      <span>{label}</span>
      <OpenLink link={link} />
      <CopyLink link={link} />
    </div>
  );
}

export default HelpfulResource;
