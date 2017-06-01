/*eslint linebreak-style: ["error", "windows"]*/
import React from 'react';
import { Router, Route, IndexRedirect } from 'dva/router';
import Main from './routes/main/index';
import Home from './routes/home/index';
import Login from './routes/login/index';
import Music from './routes/music/index';
import Read from './routes/read/index';
import Video from './routes/video/index';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/login" component={Login} />
      <Route path="/" component={Main} >
        <IndexRedirect to="/home" />
        <Route path="/home" component={Home} />
        <Route path="/music" component={Music} />
        <Route path="/read" component={Read} />
        <Route path="/video" component={Video} />
      </Route>
    </Router>
  );
}

export default RouterConfig;
