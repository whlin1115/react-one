/*eslint linebreak-style: ["error", "windows"]*/
import React from 'react';
import { Router } from 'dva/router';
import Main from './containers/main/index';

const registerModel = (app, model) => {
  if (!(app._models.filter(m => m.namespace === model.namespace).length === 1)) {
    app.model(model);
  }
};

const Routers = function ({ history, app }) {
  const routes = [
    {
      path: '/',
      component: Main,
      getIndexRoute(nextState, cb) {
        require.ensure([], require => {
          registerModel(app, require('./containers/main/model'));
          cb(null, { component: require('./containers/main/index') });
        }, 'dashboard');
      },
      childRoutes: [
        {
          path: 'home',
          getComponent(nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./containers/home/model'));
              cb(null, require('./containers/home/index'));
            }, 'home');
          },
        }, {
          path: 'essay',
          getComponent(nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./containers/essay/model'));
              cb(null, require('./containers/essay/index'));
            }, 'essay');
          },
        }, {
          path: 'music',
          getComponent(nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./containers/music/model'));
              cb(null, require('./containers/music/index'));
            }, 'music');
          },
        }, {
          path: 'movie',
          getComponent(nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./containers/movie/model'));
              cb(null, require('./containers/movie/index'));
            }, 'movie');
          },
        },
      ],
    },
  ];

  return <Router history={history} routes={routes} />;
};

export default Routers;
