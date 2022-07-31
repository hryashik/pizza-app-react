import axios from 'axios';
import { PizzaItem } from '../redux/slices/pizzaSlice';

const serviceApi = {
	async getPizzas() {
		const response = await axios.get<PizzaItem[]>(
			'https://62d5a414d4406e52355ee2b7.mockapi.io/pizzas-array'
		);
		return response;
	},
	async getPizzaByNumber(number: number | string) {
		const response = await axios.get(
			'https://62d5a414d4406e52355ee2b7.mockapi.io/pizzas-array/',
			{ params: { id: number } }
		);
		return response;
	},
};

export default serviceApi;
