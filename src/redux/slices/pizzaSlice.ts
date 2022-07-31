import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import serviceApi from '../../API/api';
import { RootState } from '../store';

export type PizzaItem = {
	id: number
	imageUrl: string
	title: string
	types: number[]
	sizes: number[]
	price: number,
	category: number,
	rating: number,
	description: string
}

export const fetchPizzas = createAsyncThunk<PizzaItem[]>('pizzas/getPizzas', async () => {
	const response = await serviceApi.getPizzas();
	return response.data;
});

type PizzaSliceType = {
	pizzasArray: PizzaItem[]
}

const initialState: PizzaSliceType = {
	pizzasArray: [],
};

const pizzaSlice = createSlice({
	name: 'pizzas',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchPizzas.fulfilled, (state, action) => {
			state.pizzasArray = action.payload;
		})
	},
});

export const getPizzaSelector = (state: RootState, id: number) => {
	return state.pizzas.pizzasArray.find((item) => item.id === id);
};
export default pizzaSlice.reducer;
