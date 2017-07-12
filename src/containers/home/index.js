import React from 'react';
import { connect } from 'dva';
import { Card } from '../../components';
import './style.css';

const { Wrap, Tips } = Card;

class Home extends React.PureComponent {

  componentDidMount() {
    this.props.init();
  }

  render() {
    const { data } = this.props;
    const { weather, date, content_list } = data;

    const tipsProps = {
      photo: content_list && content_list[0],
      weather,
    };

     const wrapProps = {
      lists: content_list && content_list.slice(1),
    };

    return (
      <div className="home">
        <Tips {...tipsProps} />
        <Wrap {...wrapProps} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { data } = state.home;
  return { data };
}

function mapDispatchToProps(dispatch) {
  return {
    init() {
      dispatch({
        type: 'home/idlist',
      });
    },
    onelist(id) {
      dispatch({
        type: 'home/onelist',
        payload: id,
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
