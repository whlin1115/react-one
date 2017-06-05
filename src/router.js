/*eslint linebreak-style: ["error", "windows"]*/
import React from 'react';
import { Router, Route, IndexRedirect } from 'dva/router';
import Main from './containers/main';
import Login from './containers/login';
import Home from './containers/home';
import Read from './containers/read';
import Music from './containers/music';
import Movie from './containers/movie';
import Detail from './containers/detail';

function Routers({ history }) {
  return (
    <Router history={history}>
      <Route path="/login" component={Login} />
      <Route path="/" component={Main} >
        <IndexRedirect to="home" />
        <Route path="home" component={Home} />
        <Route path="read" component={Read} />
        <Route path="music" component={Music} />
        <Route path="movie" component={Movie} />
      </Route>
      <Route path="detail/:category/:id" component={Detail} />
    </Router>
  );
}

export default Routers;
