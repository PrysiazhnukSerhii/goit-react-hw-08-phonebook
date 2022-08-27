import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsSlise';
import { persistStore } from 'redux-persist';
import { authApi } from './authSlice';
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
    [contactsApi.reducerPath]: contactsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    userInformation: persistedReducer,
  },

  middleware(getDefaultMiddleware) {
    return [
      ...getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
      contactsApi.middleware,
    ];
  },
});

export const persistor = persistStore(store);

//зробіти пробний персістор для себе ще раз тільки по інструкції їхній
// перечитай єбаний middleware в нього блять треба кидати всі прослойки ебані чи шо якого хуя туди сунути треба було цей єбаний креате іп
