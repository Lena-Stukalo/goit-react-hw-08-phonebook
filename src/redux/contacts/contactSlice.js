import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    filter: '',
  },
  reducers: {
    ChangeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { ChangeFilter, Add, Remove, FromLocal } = contactSlice.actions;
