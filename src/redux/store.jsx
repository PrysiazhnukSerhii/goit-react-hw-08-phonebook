import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { authApi } from './authSlice';
import { persistedReducer } from './userSlice';
import { contactsApi } from './contactsSlise';
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
    userInformation: persistedReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
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
