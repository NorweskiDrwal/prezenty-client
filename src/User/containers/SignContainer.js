import React, { Fragment, Component } from 'react';

import SignForm from '../components/SignForm';

import '../../_styles/User.scss';

class SignContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openRegForm: false
    }
  }

  handleOpenRegForm = () => {
    this.setState({
      openRegForm: !this.state.openRegForm
    })
  }

  render() {
    return (
      <Fragment>
        <SignForm
          handleOpenRegForm={this.handleOpenRegForm}
          openRegForm={this.state.openRegForm} />
      </Fragment>
    )
  }
};

export default SignContainer;
