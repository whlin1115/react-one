import React from 'react';
import { connect } from 'dva';
import { Detail } from '../../components';
import './style.css';

const { Content } = Detail;

class Details extends React.PureComponent {
  componentDidMount() {
    const { params } = this.props;
    this.props.detail(params);
  }

  render() {
    const { data } = this.props;
    const detailProps = {
      detail: data,
    };

    return (
      <Content {...detailProps} />
    );
  }
}

function mapStateToProps(state) {
  const { data } = state.detail;
  return {
    data,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    detail(params) {
      dispatch({
        type: 'detail/query',
        payload: params,
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);
