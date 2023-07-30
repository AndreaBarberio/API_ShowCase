import React, { useEffect, useState } from 'react';
import './Home.css';
import Spinner from '../components/Spinner/Spinner';
import Article from '../components/Article/Article';
import ProductCard from '../components/ProductCard.tsx/ProductCard';
import Banner from '../components/Banner/Banner';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../features/counter/counterSlice';
import { RootState } from '../redux/store';
import { setLastTitle } from '../features/counter/counterSlice'; // Import setLastTitle action creator

export const Home: React.FC = () => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [data, setData] = useState<any[]>([]);
	const [title, setTitle] = useState<string>('');
	const count = useSelector((state: RootState) => state.counter.value);
	const lastTitle = useSelector((state: RootState) => state.counter.lastTitle); // Get the last Title from redux
	interface MyDataType {
		title: string;
	}
	const dispatch = useDispatch();
	useEffect(() => {
		const fetchMockedAPIWithDelay = async (url: string) => {
			const response = await fetch(url);
			const data = await response.json();
			return new Promise((resolve) => setTimeout(() => resolve(data), 500));
		};

		const fetchData = async () => {
			try {
				const urls = [
					'https://run.mocky.io/v3/829e791c-47ea-46e4-9f04-30a8a9d90639',
					'https://run.mocky.io/v3/76455610-9a4b-4a32-b255-d113e536103a',
					'https://run.mocky.io/v3/035462dd-2719-461a-9602-66275bfa7c09',
					'https://run.mocky.io/v3/3e5fdaee-09a9-4e1e-a44a-1711417d31eb',
				];

				const fetchedData = [];

				for (const url of urls) {
					const data = await fetchMockedAPIWithDelay(url);
					fetchedData.push(data);
					console.log(data);
					const lastTitle =
						Array.isArray(data) && data.length > 0
							? (data[0] as MyDataType)?.title || ''
							: '';
					setTitle(lastTitle);
					dispatch(increment());
					dispatch(setLastTitle(lastTitle));
				}

				// HIDE LOADING AND SHOW DATA
				setData(fetchedData.flat());
				setIsLoading(false);
			} catch (error) {
				console.error('Errore durante le chiamate API:', error);
			}
		};

		fetchData();
	}, [dispatch]);

	return (
		<div className="home">
			<p className="home__count">Api Calls: {count}</p>
			{lastTitle && (
				<p className="home__last-title">The last component title is: {lastTitle}</p>
			)}
			{isLoading && <Spinner />}

			<div className="home__components-wrapper">
				<div className="home__component home__component--header">
					{data
						.filter((item) => item?.__component === 'banner')
						.map((banner, index) => (
							<Banner
								key={index}
								title={banner?.title}
								content={banner?.content}
							/>
						))}

					{data
						.filter((item) => item?.__component === 'article')
						.map((article, index) => (
							<Article
								key={index}
								title={article?.title}
								content={article?.content}
							/>
						))}
				</div>

				<div className="home__component home__component--product-cards">
					{data
						.filter((item) => item?.__component === 'product-card')
						.map((card, index) => (
							<ProductCard
								key={index}
								title={card?.title}
								content={card?.content}
								image={card?.image}
								link={card?.link}
							/>
						))}
				</div>
			</div>
		</div>
	);
};
