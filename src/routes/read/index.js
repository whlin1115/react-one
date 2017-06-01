import React from 'react';
import { connect } from 'dva';
import './index.css';

function Read() {
  return (
    <div className="normal">
      Route Component: Read
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Read);
