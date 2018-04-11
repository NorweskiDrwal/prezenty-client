import React, { Fragment, Component } from 'react';

import firebase from '../../firebase';
import SignForm from '../components/SignForm';

import '../../_styles/User.scss';

class SignContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openRegForm: false,
      user: {
        email: '',
        password: ''
      }
    }
  }

  handleOpenRegForm = () => {
    this.setState({ openRegForm: !this.state.openRegForm })
  }

  registerUser = (e) => {
    e.preventDefault();
    let email = this.state.user.email;
    let password = this.state.user.password;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch((error) => console.log(error));
    console.log(this.state.user);
    this.push('/utworz-nowa-liste');
  }

  loginUser = (e, { history }) => {
    e.preventDefault();
    let email = this.state.user.email;
    let password = this.state.user.password;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch((error) => console.log(error));
    console.log(this.state.user);
  }

  handleEmailChange = (e) => {
    this.setState({user: {
      email: e.target.value,
      password: this.state.user.password
    }});
  }

  handlePassChange = (e) => {
    this.setState({user: {
      email: this.state.user.email,
      password: e.target.value
    }});
  }

  render() {
    return (
      <Fragment>
        <SignForm
          handleOpenRegForm={this.handleOpenRegForm}
          openRegForm={this.state.openRegForm}
          registerUser={this.registerUser}
          loginUser={this.loginUser}
          email={this.state.user.email}
          password={this.state.user.password}
          handleEmailChange={this.handleEmailChange}
          handlePassChange={this.handlePassChange} />
      </Fragment>
    )
  }
};

export default SignContainer;
