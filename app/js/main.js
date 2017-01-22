import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import Page from './pages/Page';
import Home from './pages/Home';
// import Action from './pages/Action';

if (location.hostname === "localhost") import style from '../scss/main.scss';

render((
  <Router history={browserHistory}>
    <Route path="/" component={Page}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
), document.getElementById('root'));
