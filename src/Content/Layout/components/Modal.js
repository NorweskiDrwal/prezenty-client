import React from 'react';
import { Modal } from 'reactstrap';
import SignContainer from '../../User';

const modal = ({ 
  modalOpen, 
  toggleModalOpen, 
  goToNewList, 
}) => (
  <Modal 
    isOpen={modalOpen} 
    toggle={toggleModalOpen} >
    <SignContainer 
      toggleModalOpen={toggleModalOpen} 
      goToNewList={goToNewList} />
  </Modal>
);

export default modal;
