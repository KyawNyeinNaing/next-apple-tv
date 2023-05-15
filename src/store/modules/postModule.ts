import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.balldontlie.io/api/v1' }),
  tagTypes: ['Post'],
  endpoints: build => ({
    getPosts: build.query<any, any>({
      query: (page) => `/players?per_page=${page}`,
    }),
    addPost: build.mutation<any, any>({
      query: body => ({
        url: `posts`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Post', id: 'LIST' }],
    }),

    getPost: build.query<any, string>({
      query: id => `players/${id}`,
      providesTags: (result, error, id) => [{ type: 'Post', id }],
    }),

    updatePost: build.mutation<void, Pick<any, 'id'> & any>({
      query: ({ id, ...patch }) => ({
        url: `players/${id}`,
        method: 'PUT',
        body: patch,
      }),

      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          api.util.updateQueryData('getPost', id, draft => {
            Object.assign(draft, patch);
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
      invalidatesTags: (result, error, { id }) => [{ type: 'Post', id }],
    }),
    
    deletePost: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `players/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: (result, error, id) => [{ type: 'Post', id }],
    }),
  }),
});

export const { useGetPostQuery, useGetPostsQuery, useAddPostMutation, useUpdatePostMutation, useDeletePostMutation } =
  api;
