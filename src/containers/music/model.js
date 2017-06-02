import * as service from './service';

export default {
  namespace: 'music',
  state: {
    data: [],
  },
  reducers: {
    'musiclist/success'(state, { payload: data }) {
      return { ...state, ...data };
    },
  },
  effects: {
    *musiclist({ payload = {} }, { call, put }) {
      const { data } = yield call(service.musiclist);
      yield put({ type: 'musiclist/success', payload: data });
    },
  },
  subscriptions: {},
};
