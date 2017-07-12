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
        {
          !detail.data ? <div dangerouslySetInnerHTML={{ __html: detail.hp_content || detail.story }} />
          : detail.data.map((data,index) => <div key={index} dangerouslySetInnerHTML={{ __html: data.content }} />)
        }
      </div>
      <Footer />
    </div>
  );
}

export default Content;
