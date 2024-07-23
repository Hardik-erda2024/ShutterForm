import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    dList: [
      {
        shutterName: "Red shutter",
        width: "25",
        height: "15",
        area: "375",
      },
    ],
    discount: "50",
    discountType: "Ammount",
    customerName: "Hardik",
    personName: "jax",
    dueDate: "2024-07-20",
  },
];
const shutterSellSlice = createSlice({
  name: "shutterSellList",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    updateItem:(state,action)=>{
      state[action.payload.id] = action.payload.data;
    },
    deleteItem:(state,action)=>{
      state.splice(action.payload,1);
    }
  },
});

export const { addItem,updateItem,deleteItem } = shutterSellSlice.actions;
export default shutterSellSlice.reducer;
