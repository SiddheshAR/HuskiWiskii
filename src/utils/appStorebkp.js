import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, cartReducer)

const AppStore = configureStore({
    
    reducer:{
        cart:cartReducer,
        // user:userReducer
    }
});

// If yu want to modify abig store,it also has a reducer for itself, and this reducer is like a parent reducer.
// This reducer is responsible to maniulate the app store.
export default AppStore;