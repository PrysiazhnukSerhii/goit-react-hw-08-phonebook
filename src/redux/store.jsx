import { configureStore } from '@reduxjs/toolkit';
import { initializationUserApi } from './initializationUserSlice';
import userSliceReducer from './userSlice';
import { persistStore } from 'redux-persist';

export const store = configureStore({
  reducer: {
    [initializationUserApi.reducerPath]: initializationUserApi.reducer,
    userInfom: userSliceReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    initializationUserApi.middleware,
  ],
});

console.log(store);
// export const persistor = persistStore(store);
