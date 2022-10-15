import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/items';
import organisationReducer from './reducers/organisation';
import repoReducer from './reducers/repo';
import issuesReducer from './reducers/issues';

export const store = configureStore({
  reducer: {
    organisation: organisationReducer,
    repo: repoReducer,
    issues: issuesReducer,
    items: counterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
