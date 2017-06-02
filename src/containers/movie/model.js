import * as service from './service';

export default {
  namespace: 'movie',
  state: {
    data: [],
  },
  reducers: {
    'movielist/success'(state, { payload: data }) {
      return { ...state, ...data };
    },
  },
  effects: {
    *movielist({ payload = {} }, { call, put }) {
      const { data } = yield call(service.movielist);
      yield put({ type: 'movielist/success', payload: data });
    },
  },
  subscriptions: {},
};
