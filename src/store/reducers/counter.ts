import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 0,
  },
  reducers: {
    setCounter(state, action: PayloadAction<number>) {
      state.counter = action.payload;
    },
  },
});

export const { setCounter } = counterSlice.actions;
export default counterSlice.reducer;
