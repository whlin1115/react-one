import React from 'react';
import Photo from './Photo';
import './style.css';

function Wrap() {
  return (
    <div className="wrap">
      <p className="tips">- 问答 -</p>
      <h4 className="title">下一次，再见</h4>
      <p className="author">文 / 七天路过</p>
      <Photo />
      <p className="sub">
        可是这些，原来只是我们的奢望啊。他不记得，他根本什么都不记得。
      </p>
      <div className="bottom">
        <div className="time">1小时前</div>
        <div className="operate">
          <div className="praise">点赞</div>
          <div className="share">分享</div>
        </div>
      </div>
    </div>
  );
}

export default Wrap;
