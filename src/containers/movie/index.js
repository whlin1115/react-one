import React from 'react';
import { connect } from 'dva';
import { Card } from '../../components';
import './index.css';

const { Wrap } = Card;

class Movie extends React.PureComponent {
  componentDidMount() {
    this.props.init();
  }

  render() {
    const { data } = this.props;
    const wrapProps = {
      lists: data,
    };

    return (
      <Wrap {...wrapProps} />
    );
  }
}

function mapStateToProps(state) {
  const { data } = state.movie;
  return {
    data,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    init() {
      dispatch({
        type: 'movie/movielist',
      });
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Movie);
