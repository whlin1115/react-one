import * as service from './service';

export default {
  namespace: 'detail',
  state: {
    data: [],
  },
  reducers: {
    'essayDetail/success'(state, { payload: data }) {
      return { ...state, ...data };
    },
  },
  effects: {
    *essayDetail({ payload = {} }, { call, put }) {
      const { data } = yield call(service.essayDetail);
      yield put({ type: 'essayDetail/success', payload: data });
    },
  },
  subscriptions: {},
};
