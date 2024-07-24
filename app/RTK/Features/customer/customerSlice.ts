"use client";

import { createSlice, current } from "@reduxjs/toolkit";

// interface customerAttribute {
//   customer: {
//     modal: {
//       Name: string;
//       Email: string;
//       Phone: string;
//     };
//   }[];
// }

// const initialState: customerAttribute = {
//   customer: [],
// };

const initialState = {customers:[
  {
    modal: { Name: "Hardik", Email: "hardik@gmail.com", Phone: "6355395891" },
  },
  {
    modal: { Name: "Raj", Email: "raj@gmail.com", Phone: "6875958910" },
  },
  {
    modal: { Name: "Jayraj", Email: "hardik@gmail.com", Phone: "8547699856" },
  },
  {
    modal: { Name: "Kishan", Email: "hardik@gmail.com", Phone: "9988776655" },
  },
]};
export const customerSlice = createSlice({
  name: "customerDetails",
  initialState,
  reducers: {
    addCustomerDetails: (state, action) => {
      state.customers.push(action.payload);
    },
  },
});
export const { addCustomerDetails } = customerSlice.actions;
export default customerSlice.reducer;
