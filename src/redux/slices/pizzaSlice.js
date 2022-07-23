import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	pizzasArray: [],
};

const pizzaSlice = createSlice({
	name: 'pizzas',
	initialState,
	reducers: {
		setPizzas(state, action) {
			state.pizzasArray = action.payload;
		},
	},

});
export const {setPizzas} = pizzaSlice.actions
export default pizzaSlice.reducer