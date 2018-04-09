import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

import store from './store';

import Header from './common/Header';
import Content from './common/Content';
import Footer from './common/Footer';
import Modal from './common/Modal';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      modal: false
    }
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <Provider store={ store }>
        <BrowserRouter>
          <Fragment>
            <Header 
              toggle={this.toggle} 
              isAuthenticated={this.state.isAuthenticated} />
            <Content />
            <Footer />
            <Modal modal={this.state.modal} toggle={this.toggle} />
          </Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
