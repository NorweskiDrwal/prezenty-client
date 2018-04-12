import React from 'react';
import { Navbar, Button } from 'reactstrap';
import { Link } from 'react-router-dom'

const header = ({ 
	toggleModalOpen 
}) => (
	<header className="header">
		<Navbar light expand="md" navbar="true">
			<Link to="/">LOGO</Link>
				<Button 
					className="ml-auto" 
					onClick={toggleModalOpen}
				>Utwórz listę</Button> 
		</Navbar>
	</header>
);

export default header;