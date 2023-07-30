// ProductCard.js

import React from 'react';
import './productCard.css';
import { IProductData } from '../../utilities/types';

const ProductCard: React.FC<IProductData> = ({
	title,
	content,
	image,
	link,
}) => {
	return (
		<a href={link} className="product-card">
			<img src={image} alt={title} className="product-card__image" />
			<div className="product-card__content">
				<h3 className="product-card__title">{title}</h3>
				<p className="product-card__description">
					{content.map((item) => item)}
				</p>
			</div>
		</a>
	);
};

export default ProductCard;
