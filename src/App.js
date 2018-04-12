import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import store, { history } from './store';

import Content from './Content';
import Main from './Content/Main';
import ListCreate from './Content/List/Create'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>          
          <Content>
            <Route exact path="/" component={Main} />
            <Route path="/utworz-nowa-liste" component={ListCreate} />
          </Content>
        </ConnectedRouter>
      </Provider>
    )
  }
};

export default App;
