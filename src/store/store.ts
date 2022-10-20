import { configureStore } from '@reduxjs/toolkit';

import organisationReducer from './reducers/organisation';
import repoReducer from './reducers/repo';
import queryReducer from './reducers/query';

export const store = configureStore({
  reducer: {
    organisation: organisationReducer,
    repo: repoReducer,
    query: queryReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
