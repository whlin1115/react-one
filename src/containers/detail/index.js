import React from 'react';
import { connect } from 'dva';
import './style.css';

class Detail extends React.PureComponent {
  componentDidMount() {
    const { params: { category, id } } = this.props;
    switch (category) {
      case '1':
        this.props.essay(id);
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
        this.props.essay(id);
    }
  }

  render() {
    return (
      <div>test</div>
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
    essay() {
      dispatch({
        type: 'detail/essayDetail',
      });
    },
    serial() {
      dispatch({
        type: 'detail/serialDetail',
      });
    },
    issue() {
      dispatch({
        type: 'detail/issueDetail',
      });
    },
    music() {
      dispatch({
        type: 'detail/musicDetail',
      });
    },
    movie() {
      dispatch({
        type: 'detail/movieDetail',
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
