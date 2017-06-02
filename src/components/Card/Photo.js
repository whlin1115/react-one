import React from 'react';
import './style.css';

function Photo({ photo }) {
  return (
    <div className="normal">
      {
        photo.category === '5' ?
          <div className="line" />
        : null
      }
      <div className="photo">
        {
          photo.volume ?
            <p className="volume">{photo.volume}</p>
          : null
        }
        <img src={photo.img_url} alt="img" />
      </div>
      {
        photo.category === '5' ?
          <div className="line" />
        : null
      }
    </div>
  );
}

export default Photo;
