import React, { Fragment } from 'react';
import { Modal } from 'reactstrap';
import SignContainer from '../User';

const modal = ({ modal, toggle }) => (
  <Fragment>
    <Modal isOpen={modal} toggle={toggle} >
      <SignContainer />
    </Modal>
  </Fragment>
);

export default modal;
