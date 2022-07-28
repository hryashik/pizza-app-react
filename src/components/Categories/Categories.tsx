import React from 'react';

type CategoriesProps = {
	categoriesArray: string[]
	selectCategory: number
	changeCategory: (idx: number) => void
}

const Categories: React.FC<CategoriesProps> = ({ categoriesArray, selectCategory, changeCategory }) =>  {
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
