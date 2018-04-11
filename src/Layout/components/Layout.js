import React, { Fragment }from 'react';

import Header from '../components/Header';
import Modal from '../components/Modal';

const Layout = ({ children, toggle, modal }) => (
	<Fragment>
		<Header toggle={toggle}  />
		{children}
		<Modal modal={modal} toggle={toggle} />
	</Fragment>
);

export default Layout;
