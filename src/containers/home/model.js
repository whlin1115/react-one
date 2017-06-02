import * as service from './service';

export default {
  namespace: 'home',
  state: {
    id: null,
    weather: {},
    date: null,
    content_list: [],
    loaded: false,
  },
  reducers: {
    'onelist/success'(state, { payload: data }) {
      return { ...state, ...data };
    },
  },
  effects: {
    *onelist({ payload = {} }, { call, put }) {
      const { data } = yield call(service.queryOnelist, payload);
      yield put({ type: 'onelist/success', payload: data.data });
    },
  },
  subscriptions: {},
};
