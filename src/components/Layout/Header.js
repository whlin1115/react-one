import React from 'react';
import './style.css';

function Header({ title }) {
  return (
    <div className="header">
      <div className="button">
        <i className="icon iconfont icon-user" />
      </div>
      <div className="title">
        {title}
      </div>
      <div className="button">
        <i className="icon iconfont icon-search" />
      </div>
    </div>
  );
}

export default Header;
