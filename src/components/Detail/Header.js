import React from 'react';
import './style.css';

function Header({ title }) {
  return (
    <div className="header">
      <div className="button">
        <i className="icon iconfont icon-fanhui" />
      </div>
      <div className="title">
        一个阅读
      </div>
      <div className="button">
        <i className="icon iconfont icon-amis-share" />
      </div>
    </div>
  );
}

export default Header;
