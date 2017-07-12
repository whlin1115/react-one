import * as service from './service';

export default {
  namespace: 'main',
  state: {
    title: '一个',
  },
  reducers: {
    toggle(state, { payload: text }) {
      return { ...state, title: text };
    },
  },
  effects: {
  },
  subscriptions: {},
};
