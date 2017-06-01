import React from 'react';
import { connect } from 'dva';
import './index.css';

function Login() {
  return (
    <div className="normal">
      Route Component: Login
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Login);
