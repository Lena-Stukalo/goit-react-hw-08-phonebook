import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://631cc7824fa7d3264cb6a73a.mockapi.io',
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
      query: ({ name, numder }) => ({
        url: `/contacts`,
        method: 'Post',
        body: {
          name: name,
          phone: numder,
        },
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
