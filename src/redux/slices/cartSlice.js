import { createSlice } from '@reduxjs/toolkit';

// Чтобы меньше было кода в самом экшне
function findCopy(array, obj) {
	return array.find(item => item.title === obj.title && item.type === obj.type && item.size === obj.size);
}

const initialState = {
	positions: [],
	totalPrice: 0,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addPosition(state, action) {
			const findItem = findCopy(state.positions, action.payload);
			state.totalPrice += action.payload.price;
			if (findItem) {
				findItem.count++;
			} else {
				state.positions.push(action.payload);
			}
		},
		clearCart(state) {
			state.positions = [];
			state.totalPrice = 0;
		},
		changePizzaCount(state, action) {
			const findItem = state.positions.find(item => item.id === action.payload.id);
			switch(action.payload.text) {
				case 'decrement':
					if (findItem.count === 1) {
						state.positions = state.positions.filter(item => item.id !== action.payload.id);
						state.totalPrice = 0;
					} else {
						findItem.count--;
					}
					break;
				default:
					findItem.count++;
					break;
			}
		},
	},
});

export const { addPosition, clearCart, changePizzaCount } = cartSlice.actions;
export default cartSlice.reducer;