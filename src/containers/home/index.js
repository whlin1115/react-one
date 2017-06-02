import React from 'react';
import { connect } from 'dva';
import { Card } from '../../components';
import './index.css';

const { Wrap, Tips } = Card;

class Home extends React.PureComponent {

  componentDidMount() {
    const { idlist } = this.props;
    const id = idlist[0] || '4142';
    this.props.init(id);
  }

  render() {
    const { content_list, weather } = this.props;
    const photo = content_list[0];
    const lists = content_list.slice(1);

    const wrapProps = {
      lists,
    };

    const tipsProps = {
      photo,
      weather,
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
  const { id, weather, date, content_list } = state.home;
  const { idlist } = state.main;
  return {
    id, weather, date, content_list, idlist,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    init(id) {
      dispatch({
        type: 'home/onelist',
        payload: id,
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
