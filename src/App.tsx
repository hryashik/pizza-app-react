import React from 'react';
import Header from './components/Header/Header';
import Main from './pages/Main';
import { Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import Error404 from './pages/Error404/Error404';
import PizzaPage from './pages/PizzaPage';

function App() {
	return (
		<div className="wrapper">
			<Header />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/pizza/:id" element={<PizzaPage />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/*" element={<Error404 />} />
			</Routes>
		</div>
	);
}

export default App;
