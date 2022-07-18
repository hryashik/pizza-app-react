import React, { useState } from 'react';

function Categories() {
	const [activeIndex, setActiveIndex] = useState(0);
	function onClickCategory(idx) {
		setActiveIndex(idx);
	}
	const categories = [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые',
	];

	return (
		<div className="categories">
			<ul>
				{categories.map((cat, idx) => (
					<li
						onClick={() => onClickCategory(idx)}
						className={activeIndex === idx ? 'active' : ''}
						key={idx}
					>
						{cat}
					</li>
				))}
			</ul>
		</div>
	);
}

export default Categories;
