import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const organisationSlice = createSlice({
  name: 'organisation',
  initialState: {
    organisation: '',
  },
  reducers: {
    setOrganisation(state, action: PayloadAction<string>) {
      state.organisation = action.payload;
    },
  },
});

export const { setOrganisation } = organisationSlice.actions;
export default organisationSlice.reducer;
