import React from 'react';
import { Link } from 'react-router-dom';
import style from './Error404.module.scss';

function Error404() {
	return (
		<div className={style.root}>
			<h3>
				К сожалению, такой страницы у нас нет :( <br />
				<Link to="/">Вернуться на главную</Link>
			</h3>
		</div>
	);
}

export default Error404;
