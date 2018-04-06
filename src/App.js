import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

import store from './store';

import Header from './common/Header';
import Content from './common/Content';
import Footer from './common/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <BrowserRouter>
          <Fragment>
            <Header />
            <Content />
            <Footer />
          </Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
