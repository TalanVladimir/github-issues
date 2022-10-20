import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const querySlice = createSlice({
  name: 'query',
  initialState: {
    query: 0,
  },
  reducers: {
    setQuery(state, action: PayloadAction<number>) {
      state.query = action.payload;
    },
  },
});

export const { setQuery } = querySlice.actions;
export default querySlice.reducer;
