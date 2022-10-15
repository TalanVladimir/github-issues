import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'items',
  initialState: {
    items: 0,
  },
  reducers: {
    setItems(state, action: PayloadAction<number>) {
      state.items = action.payload;
    },
  },
});

export const { setItems } = counterSlice.actions;
export default counterSlice.reducer;
