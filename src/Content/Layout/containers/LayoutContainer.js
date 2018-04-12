import React, { Component, Fragment } from 'react';

import firebase from '../../../firebase';
import { history } from '../../../store';

import Modal from '../components/Modal';
import Header from '../components/Header';
import Logout from '../components/Logout';

class LayoutContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      isAuthenticated: false,
    }

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log('relog')
        
      }
      else {console.log('no relog')}
    });

  }

  toggleModalOpen = () => { 
    this.setState({ modalOpen: !this.state.modalOpen })
  };

  goToNewList = () => {
    history.push('/utworz-nowa-liste');
    this.setState({ isAuthenticated: !this.state.isAuthenticated });
  };

  logoutUser = () => {
    firebase.auth().signOut()
      .then(() => {
        history.push('/');
        this.setState({ isAuthenticated: !this.state.isAuthenticated });
      })
      .catch((error) => console.log(error));
  }
  
  render() {
    return(
      <Fragment>
        <Modal
          modalOpen={this.state.modalOpen}
          toggleModalOpen={this.toggleModalOpen}
          goToNewList={this.goToNewList} />
        <Header 
          toggleModalOpen={this.toggleModalOpen} />
        <Logout 
          logoutUser={this.logoutUser}
          isAuthenticated={this.state.isAuthenticated} />
      </Fragment>
    )
  }
}

export default LayoutContainer;
