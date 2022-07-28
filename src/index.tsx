import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
import './scss/app.scss';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDom.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
);
