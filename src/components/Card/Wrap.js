import React from 'react';
import { Link } from 'dva/router';
import Photo from './Photo';
import Media from './Media';
import { formatDate } from '../../utils/tool';
import './style.css';

function Wrap({ lists }) {
  return (
    lists && lists.length > 0 ?
      <div className="normal">
        {
          lists.map((list, index) => (
            <div className="wrap" key={index} >
              <Link to="detail">
                <p className="tag">- {list.share_list.wx.title.split('|')[0]} -</p>
                <h4 className="title">{list.title}</h4>
                <p className="author">文 / {list.author.user_name}</p>
                {
                  list.category === '4' ?
                    <div className="normal">
                      <Media media={list} />
                      <p className="audio">{list.music_name} . {list.audio_author} | {list.audio_album}</p>
                    </div>
                  : <Photo photo={list} />
                }
                <p className="sub"> {list.forward} </p>
                {
                  list.category === '5' ?
                    <p className="subtitle">---《{list.subtitle}》</p>
                  : null
                }
                <div className="bottom">
                  <div className="time">{formatDate(list.last_update_date)}</div>
                  <div className="operate">
                    <div className="count">{list.like_count}</div>
                    <div className="praise">点赞</div>
                    <div className="share">分享</div>
                  </div>
                </div>
              </Link>
            </div>
          ))
        }
      </div>
    : <p className="error">- 暂时没有内容 -</p>
  );
}

export default Wrap;
