import React from 'react';
import { connect } from 'dva';
import './index.css';

function Music() {
  return (
    <div className="normal">
      Route Component: Music
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Music);
