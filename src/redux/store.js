import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/filterSlice';
import pizzasReducer from './slices/pizzaSlice';
import cartReducer from './slices/cartSlice'

export const store = configureStore({
	reducer: {
		filter: filterReducer,
		pizzas: pizzasReducer,
		cart: cartReducer,
	},
});
