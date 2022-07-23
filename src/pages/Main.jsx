import React, { useEffect } from 'react';
import Categories from '../components/Categories/Categories';
import Sort from '../components/Sort/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import PizzaBlockSkeleton from '../components/PizzaBlock/PizzaBlockSkeleton';
import { useSort } from '../hooks/useSort';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { changeCategory, changeSort } from '../redux/slices/filterSlice';
import serviceApi from '../API/api';
import { setPizzas } from '../redux/slices/pizzaSlice';

function Main() {
	const dispatch = useDispatch();

	//Pizzas
	const pizzasArray = useSelector(state => state.pizzas.pizzasArray);

	useEffect(() => {
		async function getPizzas() {
			const response = await serviceApi.getPizzas();
			dispatch(setPizzas(response.data));
		}

		getPizzas();
		window.scrollTo(0, 0);
	}, [dispatch]);

	//Categories
	function onChangeCategory(idx) {
		dispatch(changeCategory(idx));
	}

	const categoriesArray = useSelector((state) => state.filter.categoriesArray);
	const selectedCategory = useSelector((state) => state.filter.selectCategory);

	//Sort
	const { sort } = useSelector((state) => state.filter);

	function onChangeSort(action) {
		dispatch(changeSort(action));
	}

	const sortedArr = useSort(pizzasArray, sort.selectedSort);
	const filtArr = sortedArr.filter((a) => {
		if (selectedCategory !== 0) {
			return a.category === selectedCategory;
		} else {
			return a;
		}
	});

	const skeletons = [...new Array(6)].map((_, i) => (
		<PizzaBlockSkeleton key={i} />
	));
	const pizzas = filtArr.map((obj) =>
		<PizzaBlock
			key={obj.id}
			{...obj}
		/>);

	return (
		<div className='container'>
			<div className='content__top'>
				<Categories
					categoriesArray={categoriesArray}
					selectCategory={selectedCategory}
					changeCategory={onChangeCategory}
				/>
				<Sort
					sortArray={sort.sortArray}
					selectedSort={sort.selectedSort}
					changeSort={onChangeSort}
				/>
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				{pizzasArray.length ? pizzas : skeletons}
			</div>
		</div>
	);
}

export default Main;
