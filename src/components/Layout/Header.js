import React from 'react';
import './style.css';

function Header({ title }) {
  return (
    <div className="header">
      <div className="button">
        用户
      </div>
      <div className="title">
        {title}
      </div>
      <div className="button">
        搜索
      </div>
    </div>
  );
}

export default Header;
