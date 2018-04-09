import React from 'react';
import { Navbar, Button } from 'reactstrap';
import { Link } from 'react-router-dom'

const header = ({ isAuthenticated, toggle }) => (
	<header className="header">
		<Navbar light expand="md" navbar="true">
			<Link to="/">LOGO</Link>
			{ isAuthenticated && <Link className="ml-auto" to="/utworz-nowa-liste">
				<Button>Utwórz listę</Button>
			</Link> }
			<Button 
				className="ml-auto" 
				onClick={toggle}>Utwórz listę</Button>
		</Navbar>
	</header>
);

export default header;