import { createSlice } from '@reduxjs/toolkit/';

const initialState = {
	selectCategory: 0,
	categoriesArray: [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые',
	],
	sort: {
		sortArray: [
			{ name: 'Популярности', value: 'rating' },
			{ name: 'Цене (Возрастание)', value: 'price' },
			{ name: 'Цене (Убывание)', value: 'price' },
			{ name: 'По названию (А-Я)', value: 'title' },
		],
		selectedSort: {
			name: 'Популярности',
			value: 'rating',
		},
	},
};

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		changeCategory(state, action) {
			state.selectCategory = action.payload;
		},
		changeSort(state, action) {
			state.sort.selectedSort = action.payload;
		},
	},
});

export const { changeCategory, changeSort } = filterSlice.actions;
export default filterSlice.reducer;
