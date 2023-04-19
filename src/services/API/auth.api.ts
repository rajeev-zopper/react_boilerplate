import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_END_POINT } from '../../constants/apiEndPoints'
import { ILoginInput } from '../../types/userAuth'

const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_BASE_URL }),
  endpoints: (build) => ({
    login: build.mutation<any, ILoginInput>({
      query: (data) => ({
        url: API_END_POINT.AUTH_LOGIN,
        method: 'POST',
        body: data,
      }),
    }),
  }),
})

const { useLoginMutation } = authApi

export { authApi, useLoginMutation }
