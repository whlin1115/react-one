import * as service from './service';

export default {
  namespace: 'detail',
  state: {
    data: [],
    detail: {},
  },
  reducers: {
    'readDetail/success'(state, { payload: { data } }) {
      return { ...state, detail: data };
    },
    'musicDetail/success'(state, { payload: data }) {
      return { ...state, ...data };
    },
    'movieDetail/success'(state, { payload: data }) {
      return { ...state, ...data };
    },
    'issueDetail/success'(state, { payload: data }) {
      return { ...state, ...data };
    },
    'essayDetail/success'(state, { payload: data }) {
      return { ...state, ...data };
    },
  },
  effects: {
    *readDetail({ payload = {} }, { call, put }) {
      const { data } = yield call(service.readDetail, payload);
      yield put({ type: 'readDetail/success', payload: data });
    },
    *musicDetail({ payload = {} }, { call, put }) {
      const { data } = yield call(service.musicDetail, payload);
      yield put({ type: 'musicDetail/success', payload: data });
    },
    *movieDetail({ payload = {} }, { call, put }) {
      const { data } = yield call(service.movieDetail, payload);
      yield put({ type: 'movieDetail/success', payload: data });
    },
    *issueDetail({ payload = {} }, { call, put }) {
      const { data } = yield call(service.issueDetail, payload);
      yield put({ type: 'issueDetail/success', payload: data });
    },
    *essayDetail({ payload = {} }, { call, put }) {
      const { data } = yield call(service.essayDetail, payload);
      yield put({ type: 'essayDetail/success', payload: data });
    },
  },
  subscriptions: {},
};
