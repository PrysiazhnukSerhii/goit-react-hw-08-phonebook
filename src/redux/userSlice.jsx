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
  reducers: {
    // addUserInform(state, action) {
    //   state.user = action.payload.user;
    //   state.token = action.payload.token;
    //   state.isLoggedIn = true;
    //   console.log(action);
    // },
  },
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
  },
});

// export const {} = userSlice.actions;

export default userSlice.reducer;

//------------------------persist-----------

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};
// whitelist: ['token']
export const persistedReducer = persistReducer(
  persistConfig,
  userSlice.reducer
);

// коли заповнюю стейт може кразе щоб роспилчти в нього просто всі значення
