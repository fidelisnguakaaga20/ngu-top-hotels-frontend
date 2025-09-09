// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


// const authApi = createApi({
//     reducerPath: 'authApi',
//     baseQuery: fetchBaseQuery({
//         baseUrl: "http://localhost:5000/api/auth",
//         credentials: "include",
//     }),
//     endpoints: (builder) => ({
//         registerUser: builder.mutation({
//             query: (newUser) => ({
//                 url: "/register",
//                 method: "POST",
//                 body: newUser,
//             })
//         }),
//         loginUser: builder.mutation({
//             query: (credentials) => ({
//                 url: "/login",
//                 method: "POST",
//                 body: credentials,
//             })
//         }),
//          logoutUser: builder.mutation({
//             query: () => ({
//                 url: "/logout",
//                 method: "POST"
//             })
//          }),
//           getUser: builder.query({
//             query: () => ({
//                 url: "/users",
//                 method: "GET",
//             }),
//             refetchOnMont: true,
//             invalidatesTags: ["User"]
//         }),
//         deleteUser: builder.mutation({
//             query: (userId) => ({
//                 url: `/users/${userId}`,
//                 method: "DELETE",
//             }),
//         }),
//         updateUserRole: builder.mutation({
//   query: ({ id, role }) => ({
//     url: `/users/${id}`,
//     method: 'PUT',
//     body: { role },
//     credentials: 'include',
//   }),
//         // updateUserRole: builder.mutation({
//         //     query: (userId, role) => ({
//         //         url: `/users/${userId}`,
//         //         method: "PUT",
//         //         body: (role),
//         //     }),
//               refetchOnMont: true,
//             invalidatesTags: ["User"]
//         })
//     })
// })

// export const {useRegisterUserMutation, useLoginUserMutation, useLogoutUserMutation, useGetUserQuery, useDeleteUserMutation, useUpdateUserRoleMutation} = authApi;

// export default authApi;




import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_BASE}/auth`,
    credentials: 'include',
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (newUser) => ({ url: '/register', method: 'POST', body: newUser }),
    }),
    loginUser: builder.mutation({
      query: (credentials) => ({ url: '/login', method: 'POST', body: credentials }),
    }),
    logoutUser: builder.mutation({
      query: () => ({ url: '/logout', method: 'POST' }),
    }),
    getUser: builder.query({
      query: () => ({ url: '/users', method: 'GET' }),
      providesTags: ['User'],
    }),
    deleteUser: builder.mutation({
      query: (userId) => ({ url: `/users/${userId}`, method: 'DELETE' }),
      invalidatesTags: ['User'],
    }),
    updateUserRole: builder.mutation({
      query: ({ id, role }) => ({
        url: `/users/${id}`,
        method: 'PUT',
        body: { role },
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useGetUserQuery,
  useDeleteUserMutation,
  useUpdateUserRoleMutation,
} = authApi;

export default authApi;





