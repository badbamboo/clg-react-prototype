import React, { FC } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { APP_CONFIG } from '../../configuration';

const { title, navList } = APP_CONFIG;

interface LayoutProps {}

const Layout: FC<LayoutProps> = () => (
	<>
		<Navbar bg="primary" variant="dark">
			<Container>
				<Navbar.Brand  as={Link} to="/upload">{title}</Navbar.Brand>
				<Nav>
					{navList.map((nv: any) => {
						return (
							<Nav.Item key={nv.key}>
								<Nav.Link as={Link} to={nv.value}>{nv.key}</Nav.Link>
							</Nav.Item>
						);
					})}
				</Nav>
			</Container>
		</Navbar>
		<Container className="p-5">
			<Outlet />
		</Container>
	</>
);

export default Layout;
