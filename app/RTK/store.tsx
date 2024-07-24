"use client";
import {configureStore } from "@reduxjs/toolkit";
import { persistedReducer } from "./Persist/persistConfig";
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistStore} from "redux-persist";

// const rootReducer = combineReducers({
//   counter: counterReducer,
//   customerDetails: persistedReducer,
//   shutterList:shutterSlice,
//   shutterSellList:shutterSellSlice
// });

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>