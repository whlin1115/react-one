import React from 'react';
import './style.css';

function Media({ url }) {
  return (
    <div className="media">
      <img src={url} alt="media" />
    </div>
  );
}

export default Media;
