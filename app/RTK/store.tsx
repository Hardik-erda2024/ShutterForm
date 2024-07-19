"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "../RTK/Features/demo/demoSlice";
import customerReducer from "./Features/customer/customerSlice";
import shutterSlice from "./Features/shutter/shutterSlice";
import shutterSellSlice from "./Features/shutterSell/shutterSellSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  customerDetails: customerReducer,
  shutterList:shutterSlice,
  shutterSellList:shutterSellSlice
});

export const store = configureStore({
  reducer: rootReducer,
});
