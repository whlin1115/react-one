import React from 'react';
import { connect } from 'dva';
import { Card } from '../../components';
import './index.css';

const { Wrap } = Card;

class Home extends React.PureComponent {
  componentDidMount() {
    this.props.init();
  }

  render() {
    const { content_list } = this.props;

    const wrapProps = {
      lists: content_list,
    };
    return (
      <Wrap {...wrapProps} />
    );
  }
}

function mapStateToProps(state) {
  const { id, weather, date, content_list } = state.home;
  return {
    id, weather, date, content_list,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    init() {
      dispatch({
        type: 'home/onelist',
        payload: '4142',
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
