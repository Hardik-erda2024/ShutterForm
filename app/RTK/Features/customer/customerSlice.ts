"use client"

import { createSlice } from "@reduxjs/toolkit"

const initialState = [{
    modal:{Name:"Hardik",Email:"hardik@gmail.com",Phone:"6355395891"}
}]
export const customerSlice = createSlice({
    name:"customerDetails",
    initialState,
    reducers:{
        addCustomerDetails:(state,action)=>{
            state.push(action.payload)
        }
    }
})
export const {addCustomerDetails} = customerSlice.actions
export default customerSlice.reducer