import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const initializationUserApi = createApi({
  reducerPath: 'initializationUserApi',
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
  }),
});

export const { useSignUpUserMutation } = initializationUserApi;

// Запрос на створення нового контакту робить

//ferem@gmailcom
// Serhii Prysiazhniuk
// 26012010
