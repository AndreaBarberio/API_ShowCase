// path/to/your/store.ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice'; // Import your counterSlice reducer

export const store = configureStore({
	reducer: {
		counter: counterReducer, // Add your counterSlice reducer to the store
		// Add other reducers if you have any
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
