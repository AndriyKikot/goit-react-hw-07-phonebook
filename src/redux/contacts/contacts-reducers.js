import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { addContact, deleteContact, changeFilter } from './contacts-actions';

const items = createReducer([], {
  addContactSuccess: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
