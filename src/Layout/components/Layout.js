import React, { Fragment }from 'react';

import Header from '../components/Header';
import Modal from '../components/Modal';
import Logout from '../components/Logout';

const Layout = ({ 
	children, 
	toggle, 
	modal, 
	goToNewList, 
	logoutUser,
	isAuthenticated,
	isNewList }) => (
	<Fragment>
		<Header 
			toggle={toggle}
			isAuthenticated={isAuthenticated}
			isNewList={isNewList} />
		{children}
		<Modal 
			modal={modal} 
			toggle={toggle} 
			goToNewList={goToNewList} />
		<Logout 
			logoutUser={logoutUser}
			isAuthenticated={isAuthenticated} />
	</Fragment>
);

export default Layout;
