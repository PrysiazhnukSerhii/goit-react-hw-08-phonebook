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
    login: builder.mutation({
      query: userInformation => {
        console.log(userInformation);
        return {
          url: `/users/login`,
          method: 'POST',
          body: userInformation,
        };
      },
    }),
    logOut: builder.mutation({
      query: token => ({
        url: `/users/logout`,
        method: 'POST',
        header: `Authorization: Bearer ${token}`,
      }),
    }),
  }),
});

export const { useSignUpUserMutation, useLoginMutation, useLogOutMutation } =
  authApi;

// Запрос на створення нового контакту робить

//ferem@gmail.com
// Serhii Prysiazhniuk
// 26012010
