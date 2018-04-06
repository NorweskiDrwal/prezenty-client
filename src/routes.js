import React from 'react';
import { Route, Switch } from 'react-router';

import Main from './Main';
import ListCreate from './List/Create';

// Import modules/routes

export default (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/utworz-nowa-liste" component={ListCreate} />
  </Switch>
);