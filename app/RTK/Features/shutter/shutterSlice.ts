import { createSlice } from "@reduxjs/toolkit";

const initialState = ['Red shutter','Blue shutter','Green shutter']
export const shutterSlice = createSlice({
    name:"shutterList",
    initialState,
    reducers:{
        addShutter:(state,action)=>{
            state.push(action.payload)
        }
    }
})

export const {addShutter} = shutterSlice.actions
export default shutterSlice.reducer