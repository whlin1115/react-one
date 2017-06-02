import React from 'react';
import { Link } from 'dva/router';
import './style.css';

function Footer({ footers, toggle }) {
  return (
    <div className="footer">
      {
        footers.map((nav) => (
          <div className="button" key={nav.key} >
            <Link to={`${nav.path}`} activeStyle={{ color: '#000' }} onClick={() => { toggle(nav.title); }}>{nav.lable}</Link>
          </div>
        ))
      }
    </div>
  );
}

export default Footer;
