import React from 'react';
import ContentLoader from 'react-content-loader';

const PizzaBlockSkeleton = (props: object) => (
	<ContentLoader
		speed={2}
		width={280}
		height={466}
		viewBox="0 0 280 466"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		{...props}
	>
		<circle cx="141" cy="158" r="90" />
		<rect x="6" y="264" rx="20" ry="20" width="270" height="62" />
	</ContentLoader>
);

export default PizzaBlockSkeleton;
