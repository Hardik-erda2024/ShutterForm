import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import customerReducer from '../Features/customer/customerSlice'; 
import shutterSlice from '../Features/shutter/shutterSlice';
import shutterSellSlice from '../Features/shutterSell/shutterSellSlice';
import { combineReducers } from '@reduxjs/toolkit';
const rootReducer = combineReducers({
    customerDetails: customerReducer,
    shutterList:shutterSlice,
    shutterSellList:shutterSellSlice
  });
const customerPersistConfig = {
    key: "customerRedux",
    storage,
    blacklist: ["somethingTemporary"],
  };
  
export const persistedReducer = persistReducer(customerPersistConfig,rootReducer );
