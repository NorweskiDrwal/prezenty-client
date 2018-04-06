import React from 'react';

const header = (props) => (
	<header className="hero-head">
		<nav className="navbar" role="navigation" aria-label="main navigation">
			<div className="navbar-menu">
				<div className="navbar-start">
					<div className="navbar-item">
						<a className="button is-success is-inverted">
							<span className="icon">
								<i className="fas fa-clipboard-list"></i>
							</span>
							<span>Stwórz listę</span>
						</a>
					</div>
				</div>
				<div className="navbar-end">
					<div className="navbar-brand">
						<a className="navbar-item" href="https://bulma.io">
							<img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
						</a>
					</div>
				</div>
			</div>
		</nav>
	</header>
);

export default header;