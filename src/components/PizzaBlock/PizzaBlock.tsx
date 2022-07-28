import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useFindCopy } from '../../hooks/useFindCopy';
import { addPosition } from '../../redux/slices/cartSlice';
import { useNavigate } from 'react-router-dom';

type PizzaBlockProps = {
	title: string
	price: number
	imageUrl: string
	sizes: number[]
	types: number[]
	id: number
}

type positionsType = {
	title: string
	size: number
	type: string
	count: number
}[]

const PizzaBlock: React.FC <PizzaBlockProps> = ({ title, price, imageUrl, sizes, types, id }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	//Cart
	const positions: positionsType = useSelector((state: any) => state.cart.positions);

	const [activeType, setActiveType] = useState(0);
	const [activeSize, setActiveSize] = useState(0);
	const typesPizza = ['Тонкое', 'Традиционное'];
	const findItem: {count: number} | undefined = useFindCopy(positions, [
		title,
		sizes[activeSize],
		typesPizza[activeType],
	]);
	function changeType(idx: number) {
		setActiveType(idx);
	}

	function changeSize(idx: number) {
		setActiveSize(idx);
	}

	function clickOnAdd() {
		//Формирую объект из входящих данных и передаю в action creator
		const obj = {
			id: Date.now(),
			title,
			price,
			imageUrl,
			size: sizes[activeSize],
			type: typesPizza[activeType],
			count: 1,
		};
		dispatch(addPosition(obj));
	}

	return (
		<div className="pizza-block-wrapper">
			<div className="pizza-block">
				<img
					onClick={() => navigate(`/pizza/${id}`)}
					className="pizza-block__image"
					src={imageUrl}
					alt="Pizza"
				/>
				<h4 className="pizza-block__title">{title}</h4>
				<div className="pizza-block__selector">
					<ul>
						{types.map((type, idx) => (
							<li
								key={idx}
								onClick={() => changeType(idx)}
								className={idx === activeType ? 'active' : ''}
							>
								{typesPizza[type]}
							</li>
						))}
					</ul>
					<ul>
						{sizes.map((size, idx) => (
							<li
								onClick={() => changeSize(idx)}
								key={size}
								className={idx === activeSize ? 'active' : ''}
							>
								{size}
							</li>
						))}
					</ul>{' '}
				</div>
				<div className="pizza-block__bottom">
					<div className="pizza-block__price">от {price} ₽</div>
					<button className="button button--outline button--add">
						<svg
							width="12"
							height="12"
							viewBox="0 0 12 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
								fill="white"
							/>
						</svg>
						<span onClick={() => clickOnAdd()}>Добавить</span>
						<i>{findItem ? findItem.count : 0}</i>
					</button>
				</div>
			</div>
		</div>
	);
}

export default PizzaBlock;
