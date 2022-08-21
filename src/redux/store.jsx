import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './authSlice';
import { persistStore } from 'redux-persist';
import { persistedReducer } from './userSlice';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    userInfom: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

//зробіти пробний персістор для себе ще раз тільки по інструкції їхній
