import React from 'react';
import { connect } from 'dva';
import { Card } from '../../components';
import './style.css';

const { Wrap } = Card;

class Music extends React.PureComponent {
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
  const { data } = state.music;
  return {
    data,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    init() {
      dispatch({
        type: 'music/musiclist',
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Music);
