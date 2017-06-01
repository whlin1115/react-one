import React from 'react';
import { connect } from 'dva';
import { Layout } from '../../components';
import './index.css';

const { Header, Footer } = Layout;

function Main({ children }) {
  return (
    <div className="normal">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Main);
