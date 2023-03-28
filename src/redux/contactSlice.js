import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';



const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers: {
    addNewContact: {
      reducer(state, action) {


    // if (action.payload.name) {
    //   alert(`${action.payload.name} is already in contacts.`);
    //   return;
    // }
            state.contacts.push(action.payload);
       
      },
      prepare({ name, number }) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
      },
      
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
   
  },
});



export const { addNewContact, deleteContact, toggleCompleted } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
