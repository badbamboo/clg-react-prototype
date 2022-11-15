import React, { FC } from 'react';
import styles from './layout.module.css';
import { Outlet, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { APP_CONFIG  } from "../../configuration";
interface LayoutProps {}

const Layout: FC<LayoutProps> = () => (
	<>
		<Navbar bg="primary" variant="dark">
			<Container>
				<Navbar.Brand href="#home">OCR Prototype</Navbar.Brand>
				<Nav>
        {APP_CONFIG.navList.map((nv: any) => {
        return (<Nav.Item key={nv.key}>
						<Nav.Link href={nv.value}>{nv.key}</Nav.Link>
					</Nav.Item>)
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
