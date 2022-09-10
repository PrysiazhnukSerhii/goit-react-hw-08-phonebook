import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authApi } from './authSlice';

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: 'userInformation',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      authApi.endpoints.signUpUser.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
        state.isLoggedIn = true;
      }
    );
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
        state.isLoggedIn = true;
      }
    );
    builder.addMatcher(
      authApi.endpoints.logOut.matchFulfilled,
      (state, { payload }) => {
        state.token = null;
        state.user = null;
        state.isLoggedIn = false;
      }
    );
    builder.addMatcher(
      authApi.endpoints.getUserInformation.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user;
        state.isLoggedIn = true;
      }
    );
  },
});

export default userSlice.reducer;

//------------------------persist-----------

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

export const persistedReducer = persistReducer(
  persistConfig,
  userSlice.reducer
);
