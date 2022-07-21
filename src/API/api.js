import axios from 'axios';

const serviceApi = {
	getPizzas() {
		axios.get('https://62d5a414d4406e52355ee2b7.mockapi.io/pizzas-array');
	},
};
