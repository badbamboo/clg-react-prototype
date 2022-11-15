import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/layout';
import Welcome from './components/welcome/welcome';
import Upload from './components/upload/upload';

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Welcome />} />
					<Route path="/upload" element={<Upload />} />
				</Route>
			</Routes>
		</HashRouter>
	);
}

export default App;
