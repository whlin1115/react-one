import React from 'react';
import { connect } from 'dva';
import { Detail } from '../../components';
import './style.css';

const { Content } = Detail;

class Details extends React.PureComponent {
  componentDidMount() {
    const { params: { category, id } } = this.props;
    switch (category) {
      case '1':
        this.props.read(id);
        break;
      case '2':
        this.props.serial(id);
        break;
      case '3':
        this.props.issue(id);
        break;
      case '4':
        this.props.music(id);
        break;
      case '5':
        this.props.movie(id);
        break;
      default:
        this.props.read(id);
    }
  }

  render() {
    const { detail } = this.props;
    const detailProps = {
      detail,
    };
    return (
      <Content {...detailProps} />
    );
  }
}

function mapStateToProps(state) {
  const { detail } = state.detail;
  return {
    detail,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    read(id) {
      dispatch({
        type: 'detail/readDetail',
        payload: id,
      });
    },
    serial(id) {
      dispatch({
        type: 'detail/serialDetail',
        payload: id,
      });
    },
    issue(id) {
      dispatch({
        type: 'detail/issueDetail',
        payload: id,
      });
    },
    music(id) {
      dispatch({
        type: 'detail/musicDetail',
        payload: id,
      });
    },
    movie(id) {
      dispatch({
        type: 'detail/movieDetail',
        payload: { id },
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);
