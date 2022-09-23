import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    getAllContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: contactID => ({
        url: `/contacts/${contactID}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
    createContact: builder.mutation({
      query: body => ({
        url: `/contacts`,
        method: 'Post',
        body,
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useGetAllContactsQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
} = contactsApi;
