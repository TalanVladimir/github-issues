import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const prepareSlice = createSlice({
  name: 'prepare',
  initialState: {
    page: 1,
    pages: 1,
    filter: 1,
    isAsc: true,
  },
  reducers: {
    setPrepare(
      state,
      action: PayloadAction<{
        page: number;
        pages: number;
        filter: number;
        isAsc: boolean;
      }>,
    ) {
      state.page = action.payload.page;
      state.pages = action.payload.pages;
      state.filter = action.payload.filter;
      state.isAsc = action.payload.isAsc;
    },
  },
});

export const { setPrepare } = prepareSlice.actions;
export default prepareSlice.reducer;
