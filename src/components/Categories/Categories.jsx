import React from 'react';

function Categories({ categoriesArray, selectCategory, changeCategory }) {
	return (
		<div className="categories">
			<ul>
				{categoriesArray.map((cat, idx) => (
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
