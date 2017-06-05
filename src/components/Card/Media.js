import React from 'react';
import './style.css';

function Media({ media }) {
  return (
    <div className="media photo">
      <p className="text">STORIES OF MUSIC</p>
      <img className="cover" src={media.img_url} alt="media" />
      <img className="play" src={require('../../assets/img/play.png')} alt="" />
    </div>
  );
}

export default Media;
