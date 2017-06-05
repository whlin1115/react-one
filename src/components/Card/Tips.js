import React from 'react';
import Photo from './Photo';
import './style.css';

function Tips({ photo, weather }) {
  return (
    photo && weather ?
      <div className="tips" >
        <p className="date">{weather.date.split('-').join(' / ')}</p>
        <p className="weather">{weather.wind_direction}</p>
        <Photo photo={photo} />
        <p className="author">{photo.title} | {photo.pic_info}</p>
        <div className="box">
          <p className="sub">{photo.forward}</p>
          <p className="title">{photo.words_info}</p>
          <div className="bottom">
            <div className="time">小记</div>
            <div className="operate">
              <div className="count">{photo.like_count}</div>
              <div className="praise"><i className="icon iconfont icon-dianzan1" /></div>
              <div className="share"><i className="icon iconfont icon-amis-share" /></div>
            </div>
          </div>
        </div>
      </div> :
      null
  );
}

export default Tips;
