import React from 'react';
import Footer from './Footer';
import Header from './Header';
import './style.css';

function Content({ detail }) {
  return (
    <div className="normal">
      <Header />
      <div className="content">
        <h2 className="title">{detail.hp_title}</h2>
        <p className="author">文 / {detail.author[0].user_name} </p>
        <div dangerouslySetInnerHTML={{ __html: detail.hp_content }} />
      </div>
      <Footer />
    </div>
  );
}

export default Content;
