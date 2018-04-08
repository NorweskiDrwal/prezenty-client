import React from 'react';
import { Navbar, Button } from 'reactstrap';
import { Link } from 'react-router-dom'

const header = () => (
	<header className="header">
		<Navbar light expand="md" navbar="true">
			<Link to="/">LOGO</Link>
			<Link className="ml-auto" to="/utworz-nowa-liste">
				<Button>Utwórz listę</Button>
			</Link>
			<Link className="ml-auto" to="/logowanie">
				<Button>Zaloguj jako opiekun listy</Button>
			</Link>
		</Navbar>
	</header>
);

export default header;