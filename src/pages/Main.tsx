import React, { useEffect } from 'react';
import Categories from '../components/Categories/Categories';
import Sort from '../components/Sort/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import PizzaBlockSkeleton from '../components/PizzaBlock/PizzaBlockSkeleton';
import { useSort } from '../hooks/useSort';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { changeCategory, changeSort } from '../redux/slices/filterSlice';
import { fetchPizzas } from '../redux/slices/pizzaSlice';

function Main() {
	const dispatch = useDispatch();
	const pizzasArray = useSelector((state: any) => state.pizzas.pizzasArray);
	const categoriesArray = useSelector(
		(state: any) => state.filter.categoriesArray
	);
	const selectedCategory = useSelector(
		(state: any) => state.filter.selectCategory
	);
	const { sort } = useSelector((state: any) => state.filter);

	useEffect(() => {
		dispatch<any>(fetchPizzas());
	}, [dispatch]);

	const onChangeCategory = (idx: number) => dispatch(changeCategory(idx));
	const onChangeSort = (action: object) => dispatch(changeSort(action));

	// Сортировка и фильтрация массива с пиццами
	const sortedArr = useSort(pizzasArray, sort.selectedSort);
	const filtArr = sortedArr.filter((a: any) => {
		if (selectedCategory !== 0) {
			return a.category === selectedCategory;
		} else {
			return a;
		}
	});

	const pizzas = filtArr.map((obj: any) => (
		<PizzaBlock key={obj.id} {...obj} />
	));
	const skeletons = [...new Array(6)].map((_, i) => (
		<PizzaBlockSkeleton key={i} />
	));
	return (
		<div className="container">
			<div className="content__top">
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
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{pizzasArray.length ? pizzas : skeletons}
			</div>
		</div>
	);
}

export default Main;
