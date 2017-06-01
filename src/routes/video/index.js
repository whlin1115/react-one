import React from 'react';
import { connect } from 'dva';
import './index.css';

function Video() {
  return (
    <div className="normal">
      Route Component: Video
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Video);
