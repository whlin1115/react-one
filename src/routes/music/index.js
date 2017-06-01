import React from 'react';
import { connect } from 'dva';
import { Card } from '../../components';
import './index.css';

const { Wrap } = Card;

function Music() {
  return (
    <div className="normal">
      <Wrap />
      <Wrap />
      <Wrap />
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Music);
