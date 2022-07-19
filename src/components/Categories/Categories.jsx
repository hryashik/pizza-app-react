import React from 'react';

function Categories({ selectCategory, changeCategory }) {
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
						onClick={() => changeCategory(idx)}
						className={selectCategory === idx ? 'active' : ''}
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
