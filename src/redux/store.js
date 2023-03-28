import { configureStore } from "@reduxjs/toolkit";
// import { contactsReducer } from './contactSlice';
import { filterReducer } from './filterSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { contactsReducer } from "./contactSlice";


const persistConfig = {
  key: 'contacts',
  storage,
}

const persistedReducer = persistReducer(
  persistConfig,
  contactsReducer)


export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filter: filterReducer,
  },
   middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export let persistor = persistStore(store);