import { configureStore } from '@reduxjs/toolkit';

import queryReducer from './reducers/query';
import prepareReducer from './reducers/prepare';

export const store = configureStore({
  reducer: {
    query: queryReducer,
    prepare: prepareReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
