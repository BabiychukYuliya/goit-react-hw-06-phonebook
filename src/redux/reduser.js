import { createReducer } from '@reduxjs/toolkit';
import { addNewContact } from './actions';

const contactsLocalStorage = localStorage.getItem('contacts');
const contactsInitialState = contactsLocalStorage
  ? JSON.parse(contactsLocalStorage)
  : [];

export const tasksReducer = createReducer(contactsInitialState, {
    [addNewContact]: (state, action) => {
        localStorage.setItem('contacts', JSON.stringify([...state, action.payload]));
    return [...state, action.payload];
  },
  //   [deleteContact]: (state, action) => {},
  //   [filteredContact]: (state, action) => {},
});
