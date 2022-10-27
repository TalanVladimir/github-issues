import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const querySlice = createSlice({
  name: 'query',
  initialState: {
    query: 0,
    repo: '',
    organisation: '',
  },
  reducers: {
    setQuery(
      state,
      action: PayloadAction<{
        query: number;
        repo: string;
        organisation: string;
      }>,
    ) {
      state.query = action.payload.query;
      state.repo = action.payload.repo;
      state.organisation = action.payload.organisation;
    },
  },
});

export const { setQuery } = querySlice.actions;
export default querySlice.reducer;
