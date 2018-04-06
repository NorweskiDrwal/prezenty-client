import React from 'react';
import { Navbar, Button } from 'reactstrap';
import { Link } from 'react-router-dom'

const header = () => (
	<header className="header">
		<Navbar light expand="md" navbar="true">
			<Link to="/">reactstrap</Link>
			<Link className="ml-auto" to="/utworz-nowa-liste">
				<Button>Utwórz listę</Button>
			</Link>
		</Navbar>
	</header>
);

export default header;