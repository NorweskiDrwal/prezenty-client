import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import store, { history } from './store.js';

import Layout from './Layout/components/Layout';
import Main from './Main';
import ListCreate from './List/Create/';

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
      <Provider store={store}>
        <ConnectedRouter history={history}>          
          <Layout 
            toggle={this.toggle}
            modal={this.state.modal} >
            <Route exact path="/" component={Main} />
            <Route path="/utworz-nowa-liste" component={ListCreate} />
            
            {/* <Header 
              toggle={this.toggle} 
              isAuthenticated={this.state.isAuthenticated} />
            <Content />
            <Footer />
            <Modal modal={this.state.modal} toggle={this.toggle} /> */}
          </Layout>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
