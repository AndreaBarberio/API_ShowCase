// import React and other necessary modules
import React from 'react';
import { IDescriptive } from '../../utilities/types';
import './article.css'; 

const Article: React.FC<IDescriptive> = ({ title, content }) => {
	return (
		<div className="article__wrapper">
			<div className="article__title">{title}</div>
			<div className="article__content">
				{content?.map((article) => {
					console.log('article', article);
					return <div>{article}</div>;
				})}
			</div>
		</div>
	);
};

export default Article;
