import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    total: 0,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducer: {
        clearTotal: (state) => {
            state.total = 0;
        },
        increaseTotal: (state) => {
            state.total = state.total + 1;
        },
        decreaseTotal: (state) => {
            state.total = state.total - 1;
        },
    },    
});

export default counterSlice.reducer;