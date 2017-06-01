/*eslint linebreak-style: ["error", "windows"]*/
import React from 'react';
import { Router } from 'dva/router';
import Main from './routes/main';

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
          registerModel(app, require('./models/home'));
          cb(null, { component: require('./routes/home') });
        }, 'dashboard');
      },
      childRoutes: [
        {
          path: 'home',
          getComponent(nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/home'));
              cb(null, require('./routes/home'));
            }, 'home');
          },
        }, {
          path: 'essay',
          getComponent(nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/essay'));
              cb(null, require('./routes/essay'));
            }, 'essay');
          },
        }, {
          path: 'music',
          getComponent(nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/music'));
              cb(null, require('./routes/music'));
            }, 'music');
          },
        }, {
          path: 'video',
          getComponent(nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/video'));
              cb(null, require('./routes/video'));
            }, 'video');
          },
        },
      ],
    },
  ];

  return <Router history={history} routes={routes} />;
};

export default Routers;
