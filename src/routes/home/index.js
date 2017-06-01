import React from 'react';
import { connect } from 'dva';
import './index.css';

function Home() {
  return (
    <div className="normal">
      Route Component: Home
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Home);
