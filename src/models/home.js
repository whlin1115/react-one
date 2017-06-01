import * as service from '../services/home';

export default {
  namespace: 'home',
  state: {
    id: null,
    weather: {},
    date: null,
    content_list: [],
  },
  reducers: {
    'onelist/success'(state, { payload: data }) {
      return { ...state, ...data };
    },
  },
  effects: {
    *onelist({ payload = {} }, { call, put }) {
      const { data } = yield call(service.queryOnelist, payload);
      if (data.res !== 0) {
        throw data.res;
      }
      yield put({ type: 'onelist/success', payload: data.data });
    },
  },
  subscriptions: {},
};
