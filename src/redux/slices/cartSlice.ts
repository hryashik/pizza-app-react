import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItemObjectType } from '../../components/CartItem/CartItem';

// Возвращает найденный элемент массива
function findCopy(array: PizzaCart[], obj: PizzaCart) {
	return array.find(
		(item) =>
			item.title === obj.title &&
			item.type === obj.type &&
			item.size === obj.size
	);
}

// Возращает сумму по ключу
function recalcSum(array: PizzaCart[]) {
	return array.reduce((sum, b) => sum + b.price * b.count, 0);
}

export type PizzaCart = {
	title: string
	imageUrl: string
	type: string
	size: number
	price: number
	count: number
	id: number
}
interface ICartSlice {
	positions: PizzaCart[]
	totalPrice: number
}
const initialState: ICartSlice = {
	positions: [],
	totalPrice: 0,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addPosition(state, action: PayloadAction<PizzaCart>) {
			const findItem = findCopy(state.positions, action.payload);
			if (findItem) {
				findItem.count++;
			} else {
				state.positions.push(action.payload);
			}
			state.totalPrice = recalcSum(state.positions);
		},
		clearCart(state) {
			state.positions = [];
			state.totalPrice = 0;
		},
		changePizzaCount(state, action: PayloadAction<CartItemObjectType>) {
			const findItem = state.positions.find(
				(item) => item.id === action.payload.id
			);
			if(findItem)
			switch (action.payload.text) {
				case 'decrement':
					if (findItem.count === 1) {
						state.positions = state.positions.filter(
							(item) => item.id !== action.payload.id
						);
						state.totalPrice = recalcSum(state.positions);
					} else {
						findItem.count--;
						state.totalPrice = recalcSum(state.positions);
					}
					break;
				default:
					findItem.count++;
					state.totalPrice = recalcSum(state.positions);
					break;
			}
		},
	},
});

export const { addPosition, clearCart, changePizzaCount } = cartSlice.actions;
export default cartSlice.reducer;
