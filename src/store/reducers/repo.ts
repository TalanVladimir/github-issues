import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const repoSlice = createSlice({
  name: 'repo',
  initialState: {
    repo: '',
  },
  reducers: {
    setRepo(state, action: PayloadAction<string>) {
      state.repo = action.payload;
    },
  },
});

export const { setRepo } = repoSlice.actions;
export default repoSlice.reducer;
