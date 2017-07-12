import * as service from './service';

export default {
  namespace: 'detail',
  state: {
    data: {},
  },
  reducers: {
    'query/success'(state, { payload: { data } }) {
      return { ...state, data };
    },
  },
  effects: {
    *query({ payload = {} }, { call, put }) {
      const { category, id } = payload;
      const num = Number(category) - 1;
      const urls = ['readDetail', 'essayDetail', 'issueDetail', 'musicDetail', 'movieDetail'];
      const url = urls[num];
      const { data } = yield call(service[url], id);
      yield put({ type: 'query/success', payload: data });
    },
  },
  subscriptions: {},
};
