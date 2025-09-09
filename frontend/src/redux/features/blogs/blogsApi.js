// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const blogApi = createApi({
//   reducerPath: 'blogApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'http://localhost:5000/api',
//     credentials: 'include',
//   }),
//   tagTypes: ['Blogs'],
//   endpoints: (builder) => (
//     {
//       // blogsApi.js
// fetchBlogs: builder.query({
//   query: (params = {}) => {
//     const {
//       search   = '',
//       category = '',
//       location = '',
//     } = params;

//     const qs = new URLSearchParams({ search, category, location }).toString();
//     return `/blogs?${qs}`;
//   },
//   providesTags: ['Blogs'],
//   transformResponse: (res) => res?.posts ?? res,
// }),

//     // fetchBlogs: builder.query({
//     //   query: ({ search = '', category = '', location = '' }) =>
//     //     `/blogs?search=${encodeURIComponent(search)}&category=${encodeURIComponent(category)}&location=${encodeURIComponent(location)}`,
//     //   providesTags: ['Blogs'],
//     //   transformResponse: (res) => res?.posts ?? res,
//     // }),
//     fetchBlogById: builder.query({
//       query: (id) => `/blogs/${id}`,
//     }),
//     fetchRelatedBlogs: builder.query({
//       query: (id) => `/blogs/related/${id}`,
//       transformResponse: (res) => res?.posts ?? [],
//     }),
//     postBlogs: builder.mutation({
//       query: (newBlog) => ({
//         url: `/blogs/create-post`,
//         method: "POST",
//         body: newBlog,
//         credentials: "include"
//       }),
//       invalidatesTags: ['Blogs']
//     }),

// //     // blogsApi.js
// // updateBlog: builder.mutation({
// //   // expect { id, body }
// //   query: ({ id, body }) => ({
// //     url: `/blogs/update-post/${id}`,
// //     method: "PATCH",
// //     body,
// //     credentials: "include",
// //   }),
// //   invalidatesTags: (result, error, { id }) => [{ type: "Blogs", id }],
// // }),

//     updateBlog: builder.mutation({
//         query: ({id, ...rest}) => ({
//           url: `/blogs/update-post/${id}`,
//           method: "PATCH",
//           body: rest,
//           credentials: "include"
//         }),
//         invalidatesTags: (result, error, { id }) => [{ type: 'Blogs', id, }],
//     }),
//     deleteBlog: builder.mutation({
//       query: (id) => ({
//           url: `/blogs/${id}`,
//           method: "DELETE",
//           credentials: "include"
//         }),
//         invalidatesTags: (result, error, { id }) => [{ type: 'Blogs', id, }],
//     })
//   })
// })

// export const {
//   useFetchBlogsQuery,
//   useFetchBlogByIdQuery,
//   useFetchRelatedBlogsQuery, usePostBlogsMutation, useUpdateBlogMutation, useDeleteBlogMutation
// } = blogApi;




import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// 👉 will be set on Vercel
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE,
    credentials: 'include',
  }),
  tagTypes: ['Blogs'],
  endpoints: (builder) => ({
    fetchBlogs: builder.query({
      query: (params = {}) => {
        const { search = '', category = '', location = '' } = params;
        const qs = new URLSearchParams({ search, category, location }).toString();
        return `/blogs?${qs}`;
      },
      providesTags: ['Blogs'],
      transformResponse: (res) => res?.posts ?? res,
    }),
    fetchBlogById: builder.query({ query: (id) => `/blogs/${id}` }),
    fetchRelatedBlogs: builder.query({
      query: (id) => `/blogs/related/${id}`,
      transformResponse: (res) => res?.posts ?? [],
    }),
    postBlogs: builder.mutation({
      query: (newBlog) => ({
        url: `/blogs/create-post`,
        method: 'POST',
        body: newBlog,
        credentials: 'include',
      }),
      invalidatesTags: ['Blogs'],
    }),
    updateBlog: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/blogs/update-post/${id}`,
        method: 'PATCH',
        body: rest,
        credentials: 'include',
      }),
      invalidatesTags: (r, e, { id }) => [{ type: 'Blogs', id }],
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: 'DELETE',
        credentials: 'include',
      }),
      invalidatesTags: (r, e, { id }) => [{ type: 'Blogs', id }],
    }),
  }),
});

export const {
  useFetchBlogsQuery,
  useFetchBlogByIdQuery,
  useFetchRelatedBlogsQuery,
  usePostBlogsMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = blogApi;
