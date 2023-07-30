import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux'

import './index.css';

import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const container = document.getElementById('root') as HTMLDivElement;
const root = createRoot(container);

root.render(
	<div>
		<Provider store={store}>
			<App />
		</Provider>
	</div>
);
