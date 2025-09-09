// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


// const commentApi = createApi({
//     reducerPath: "commentApi",
//     baseQuery: fetchBaseQuery({
//         baseUrl: "http://localhost:5000/api/comments",
//         credentials: "include",
//     }),
//     tagTypes: ['Comments'],
//     endpoints: (builder) => ({
//         postComment: builder.mutation({
//             query: (commentData) => ({
//                 url: "/post-comment",
//                 method: "POST",
//                 body: commentData,
//             }),
//             invalidatesTags: (result, error, { postId }) => [{ type: 'Comments', id: postId }],
//         }),
//         getComments: builder.query({
//             query: () => ({
//                 url: "/total-comments",
//                 method: "GET",
//             }),
                
//         })
//     })
// })

// export const {useGetCommentsQuery, usePostCommentMutation} = commentApi;

// export default commentApi;


import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Use env in prod; fallback to dev localhost
const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const commentApi = createApi({
  reducerPath: "commentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_BASE}/comments`, // ✅ stops pointing to localhost in prod
    credentials: "include",
  }),
  tagTypes: ["Comments"],
  endpoints: (builder) => ({
    postComment: builder.mutation({
      query: (commentData) => ({
        url: "/post-comment",
        method: "POST",
        body: commentData,
      }),
      invalidatesTags: (result, error, { postId }) => [{ type: "Comments", id: postId }],
    }),
    getComments: builder.query({
      query: () => ({ url: "/total-comments", method: "GET" }),
    }),
  }),
});

export const { useGetCommentsQuery, usePostCommentMutation } = commentApi;
export default commentApi;
