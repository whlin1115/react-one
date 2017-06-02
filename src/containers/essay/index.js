import React from 'react';
import { connect } from 'dva';
import { Card } from '../../components';
import './style.css';

const { Wrap } = Card;

class Essay extends React.PureComponent {
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
  const { data } = state.essay;
  return {
    data,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    init() {
      dispatch({
        type: 'essay/readinglist',
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Essay);
