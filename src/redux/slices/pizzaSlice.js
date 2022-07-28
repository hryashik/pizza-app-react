import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import serviceApi from '../../API/api';

export const fetchPizzas = createAsyncThunk('pizzas/getPizzas', async () => {
	const response = await serviceApi.getPizzas();
	return response.data;
});

const initialState = {
	pizzasArray: [],
};

const pizzaSlice = createSlice({
	name: 'pizzas',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchPizzas.fulfilled]: (state, action) => {
			state.pizzasArray = action.payload;
		},
	},
});

export const getPizzaSelector = (state, id) => {
	return state.pizzas.pizzasArray.find((item) => item.id === id);
};
export const { setPizzas } = pizzaSlice.actions;
export default pizzaSlice.reducer;
