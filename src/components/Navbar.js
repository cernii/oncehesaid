import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => (
	<nav className="navbar navbar-dark navbar-expand-lg bg-primary">
		<div className="navbar-brand">Once he said</div>

		<ui className="navbar-nav">
			<li className="nav-item">
				<NavLink className="nav-link" to="/" exact>
					Phrase
				</NavLink>
			</li>
			<li className="nav-item">
				<NavLink className="nav-link" to="/about">
					About
				</NavLink>
			</li>
		</ui>
	</nav>
);
