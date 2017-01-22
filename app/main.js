import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import Page from './js/pages/Page';
import Home from './js/pages/Home';

import style from './main.scss';

render((
  <Router history={browserHistory}>
    <Route path="/" component={Page}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
), document.getElementById('root'));
