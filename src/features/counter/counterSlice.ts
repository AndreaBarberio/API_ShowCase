import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
	name: 'counter',
	initialState: {
		value: 0,
		lastTitle: '', // Aggiungi il campo per l'ultimo titolo
	},
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		setLastTitle: (state, action) => {
			state.lastTitle = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { increment, setLastTitle } = counterSlice.actions;

export default counterSlice.reducer;
