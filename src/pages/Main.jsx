import React, { useState, useEffect } from 'react';
import Categories from '../components/Categories/Categories';
import Sort from '../components/Sort/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import PizzaBlockSkeleton from '../components/PizzaBlock/PizzaBlockSkeleton';
import { useSort } from '../hooks/useSort';

function Main() {
	const [pizzasArray, setPizzasArray] = useState([]);
	const [selectedCategory, setSelectCategory] = useState(0);
	const [selectedSort, setSelectedSort] = useState({
		name: 'Популярности',
		value: 'rating',
	});
	useEffect(() => {
		fetch('https://62d5a414d4406e52355ee2b7.mockapi.io/pizzas-array')
			.then((response) => response.json())
			.then((data) => setPizzasArray(data));
	}, []);
	window.scrollTo(0, 0);
	const sortedArr = useSort(pizzasArray, selectedSort.value);

	return (
		<div className="container">
			<div className="content__top">
				<Categories
					selectCategory={selectedCategory}
					changeCategory={setSelectCategory}
				/>
				<Sort selectedSort={selectedSort} changeSort={setSelectedSort} />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{pizzasArray.length
					? sortedArr.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
					: [...new Array(6)].map((_, i) => (
							<PizzaBlockSkeleton key={i} />
					  ))}
			</div>
		</div>
	);
}

export default Main;
