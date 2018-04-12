import React, { Fragment } from 'react';
import { Button } from 'reactstrap';

const logout = ({ 
  logoutUser, 
  isAuthenticated,
}) => (
  <Fragment>
    { isAuthenticated && (<Button 
      className="logout__btn" 
      onClick={logoutUser} 
      color="danger">
      Wyloguj
    </Button>) }
  </Fragment>
);

export default logout;
