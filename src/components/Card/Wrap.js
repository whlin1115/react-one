import React from 'react';
import Media from './Media';
import './style.css';

function Wrap({ lists }) {
  return (
    lists && lists.length > 0 ?
      <div>
        {
          lists.map((list, index) => (
            <div className="wrap" key={index} >
              <p className="tips">- {list.share_list.wx.title.split('|')[0]} -</p>
              <h4 className="title">{list.title}</h4>
              <p className="author">文 / {list.author.user_name}</p>
              <Media url={list.img_url} />
              <p className="sub"> {list.forward} </p>
              <div className="bottom">
                <div className="time">1小时前</div>
                <div className="operate">
                  <div className="count">{list.like_count}</div>
                  <div className="praise">点赞</div>
                  <div className="share">分享</div>
                </div>
              </div>
            </div>
        ))
      }
      </div>
    : <p className="error">- 暂时没有内容 -</p>
  );
}

export default Wrap;
