import * as service from './service';

export default {
  namespace: 'main',
  state: {
    title: '一个',
    idlist: [],
  },
  reducers: {
    toggle(state, { payload: text }) {
      return { ...state, title: text };
    },
    'idlist/success'(state, { payload: data }) {
      return { ...state, idlist: data };
    },
  },
  effects: {
    *idlist({ payload = {} }, { call, put }) {
      const { data } = yield call(service.queryIdlist);
      if (data.res !== 0) {
        throw data.res;
      }
      yield put({ type: 'idlist/success', payload: data.data });
    },
  },
  subscriptions: {},
};
