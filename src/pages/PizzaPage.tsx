import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import serviceApi from '../API/api';

type PizzaType = {
	imageUrl: string
	title: string
	description: string
}

const PizzaPage: React.FC = () => {
	const params = useParams()
	const [pizza, setPizza] = useState<PizzaType>();
	React.useEffect(() => {
		serviceApi
			.getPizzaByNumber(params.id)
			.then((response) => setPizza(response.data[0]));
	}, [params]);

	if (!pizza) {
		return <>Идёт загрузка</>;
	}

	return (
		<div className="wrapper__pizza-page">
			<img src={pizza.imageUrl} alt="" />
			<h3>{pizza.title}</h3>
			<p>
				<b>Состав: </b> {pizza.description}
			</p>
		</div>
	);
};

export default PizzaPage;
