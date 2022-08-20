import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const userSlice = createSlice({
  name: 'userInformation',
  initialState: { user: { name: '', email: '' }, token: '' },
  reducers: {
    addUserInform(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;

      console.log(state);
    },
  },
});

export const { addUserInform } = userSlice.actions;

export default userSlice.reducer;

//------------------------persist-----------

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['token'],
};

export const persistedReducer = persistReducer(
  persistConfig,
  userSlice.reducer
);

// коли заповнюю стейт може кразе щоб роспилчти в нього просто всі значення
