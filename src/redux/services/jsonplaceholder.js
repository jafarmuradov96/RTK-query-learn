
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const jsonPlaceholderApi = createApi({
  reducerPath: 'jsonPlaceholder',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getPostById: builder.query({
      query: (id) => `posts/${id}`,
    }),
    createPost: builder.mutation({
        query: (post) => ({
          url: 'posts',
          method: 'POST',
          body: post
        })
    }),
    getPosts: builder.query({
        query: (page = 1) => `posts?page=${page}&limit=10`
    }),

  }),

//   keepUnusedDataFor: 60,   //istifadə' olunmayan Api-ları 60 saniyə saxlamaq üçün
//   refetchOnMountOrArgChange: 20,   // saniyəyə görə yenilənmə üçün
  
})

export const { useGetPostByIdQuery, useCreatePostMutation, useGetPostsQuery } = jsonPlaceholderApi