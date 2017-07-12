import * as service from './service';

export default {
  namespace: 'home',
  state: {
    data: {},
  },
  reducers: {
    'idlist/success'(state, { payload: data }) {
      return { ...state, idlist: data };
    },
    'onelist/success'(state, { payload }) {
      const { data } = payload;
      return { ...state, data };
    },
  },
  effects: {
    *idlist({ payload = {} }, { call, put }) {
      const { data } = yield call(service.queryIdlist);
      const id  = data.data[0];
      yield put({ type: 'onelist', payload: id });
    },
    *onelist({ payload = {} }, { call, put }) {
      const { data } = yield call(service.queryOnelist, payload);
      yield put({ type: 'onelist/success', payload: data });
    },
  },
  subscriptions: {},
};
