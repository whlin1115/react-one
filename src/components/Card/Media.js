import React from 'react';
import './style.css';

function Media({ media }) {
  return (
    <div className="media photo">
      <p className="text">STORIES OF MUSIC</p>
      <img src={media.img_url} alt="media" />
    </div>
  );
}

export default Media;
