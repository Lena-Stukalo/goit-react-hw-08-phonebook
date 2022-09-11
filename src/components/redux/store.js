import { configureStore, createSlice } from '@reduxjs/toolkit';
import { contactsApi } from './contactAPI';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
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

export const store = configureStore({
  reducer: {
    contacts: contactSlice.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
setupListeners(store.dispatch);
