import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import firebase from './firebase';
import store, { history } from './store';

import Content from './Content';
import Main from './Content/Main';
import ListCreate from './Content/List/Create/';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      isNewList: false,
      modal: false,
    }
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  goToNewList = () => {
    history.push('/utworz-nowa-liste');
    this.setState({
      isAuthenticated: !this.state.isAuthenticated,
      isNewList: !this.state.isNewList,
    });
  }

  logoutUser = () => {
    firebase.auth().signOut()
      .then(() => {
        history.push('/')
        this.setState({
          isAuthenticated: !this.state.isAuthenticated
        });
      })
      .catch(function(error) {
        console.log(error)
      });
  }

  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>          
          <Content 
            toggle={this.toggle}
            logoutUser={this.logoutUser}
            goToNewList={this.goToNewList}
            modal={this.state.modal}
            isAuthenticated={this.state.isAuthenticated}
            isNewList={this.state.isNewList}  >
            <Route exact path="/" component={Main} />
            <Route path="/utworz-nowa-liste" component={ListCreate} />
          </Content>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
