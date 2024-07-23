"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const demoSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addCar: (state,action) => {
      state.value = action.payload;
    },
  },
}); 
export const {addCar} = demoSlice.actions
export default demoSlice.reducer