import * as service from '../services/essay';

export default {
  namespace: 'essay',
  state: {
    data: [],
  },
  reducers: {
    'readinglist/success'(state, { payload: data }) {
      return { ...state, ...data };
    },
  },
  effects: {
    *readinglist({ payload = {} }, { call, put }) {
      const { data } = yield call(service.readinglist);
      if (data.res !== 0) {
        throw data.res;
      }
      yield put({ type: 'readinglist/success', payload: data });
    },
  },
  subscriptions: {},
};
