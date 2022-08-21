import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
  }),
  endpoints: builder => ({
    signUpUser: builder.mutation({
      query: registerInform => ({
        url: `/users/signup`,
        method: 'POST',
        body: registerInform,
      }),
    }),
    logOut: builder.mutation({
      query: token => ({
        url: `/contacts/logout`,
        method: 'POST',
        header: token,
      }),
    }),
  }),
});

export const { useSignUpUserMutation, useLogOutMutation } = authApi;

// Запрос на створення нового контакту робить

//ferem@gmailcom
// Serhii Prysiazhniuk
// 26012010
