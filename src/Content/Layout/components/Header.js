import React from 'react';
import { Navbar, Button } from 'reactstrap';
import { Link } from 'react-router-dom'

const header = ({ 
	isAuthenticated, 
	toggle, 
	isNewList,
}) => (
	<header className="header">
		<Navbar light expand="md" navbar="true">
			<Link to="/">LOGO</Link>
				{ !isNewList && <Button 
				className="ml-auto" 
				onClick={toggle}>Utwórz listę</Button> }
		</Navbar>
	</header>
);

export default header;