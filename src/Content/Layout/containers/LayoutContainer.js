import React, { Component, Fragment } from 'react';

import Modal from '../components/Modal';
import Header from '../components/Header';

class LayoutContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
    }
  }

  toggleModalOpen = () => { this.setState({ modalOpen: !this.state.modalOpen }) }

  render() {
    return(
      <Fragment>

        <Modal
          modalOpen={this.state.modalOpen}
          toggleModalOpen={this.toggleModalOpen} />

        <Header modalOpen={this.state.modalOpen} />

        {this.props.children}
      </Fragment>
    )
  }
}

export default LayoutContainer;
