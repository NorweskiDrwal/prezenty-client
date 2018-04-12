import React, { Fragment } from 'react';
import { Modal } from 'reactstrap';
import SignContainer from '../../User';

const modal = ({ modal, toggle, goToNewList }) => (
  <Fragment>
    <Modal isOpen={modal} toggle={toggle} >
      <SignContainer toggle={toggle} goToNewList={goToNewList} />
    </Modal>
  </Fragment>
);

export default modal;
