import React from 'react';
import { connect } from 'dva';
import { Layout } from '../../components';
import { Footers } from '../../config';
import './index.css';

const { Header, Footer } = Layout;

function Main({ children, title, toggle }) {
  const headerProps = {
    title,
  };

  const footerProps = {
    toggle,
    footers: Footers,
  };

  return (
    <div className="normal">
      <Header {...headerProps} />
      <div className="content">
        {children}
      </div>
      <Footer {...footerProps} />
    </div>
  );
}

function mapStateToProps(state) {
  const { title } = state.main;
  return {
    title,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggle(text) {
      dispatch({
        type: 'main/toggle',
        payload: text,
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
