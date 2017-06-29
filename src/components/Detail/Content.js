import React from 'react';
import Footer from './Footer';
import Header from './Header';
import './style.css';
import './one.css';

function Content({ detail }) {
  return (
    <div className="normal">
      <Header />
      <div className="text-content">
        <h2 className="title">{detail.hp_title}</h2>
        <div dangerouslySetInnerHTML={{ __html: detail.hp_content }} />
      </div>
      <Footer />
    </div>
  );
}

export default Content;
