import React from 'react';
import './style.css';

function Photo() {
  return (
    <div className="photo">
      <img src={require('../../assets/timg.jpg')} alt="photo" />
    </div>
  );
}

export default Photo;
