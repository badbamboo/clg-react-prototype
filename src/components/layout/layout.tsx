import React, { FC } from 'react';
import styles from './layout.module.css';
import { Outlet, Link } from 'react-router-dom';

interface LayoutProps {}

const Layout: FC<LayoutProps> = () => (
	<div>
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/upload">upload</Link>
				</li>
			</ul>
		</nav>

		<Outlet />
	</div>
);

export default Layout;
