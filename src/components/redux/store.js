import { configureStore, createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    ChangeFilter(state, action) {
      state.filter = action.payload;
    },
    FromLocal(state, action) {
      state.items = action.payload;
    },
    Add(state, action) {
      state.items.push(action.payload);
    },
    Remove(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});
export const { ChangeFilter, Add, Remove, FromLocal } = contactSlice.actions;

export const store = configureStore({
  reducer: {
    contacts: contactSlice.reducer,
  },
});
