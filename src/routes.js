import React from 'react';
import { Route, Switch } from 'react-router';

import Main from './Main';

// Import modules/routes

export default (
  <Switch>
    <Route exact path="/" component={Main} />
  </Switch>
);