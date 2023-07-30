import React from 'react';
import './banner.css';
import { IDescriptive } from '../../utilities/types';

const Banner: React.FC<IDescriptive> = ({ title, content }) => {
	return (
		<div className="banner">
			<h2 className="banner__title">{title}</h2>
			<p className="banner__content">{content}</p>
		</div>
	);
};

export default Banner;
