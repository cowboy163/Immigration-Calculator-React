import {createSlice} from "@reduxjs/toolkit";

export const eeSlice = createSlice({
    name: "eeCalc",
    initialState: {
        age: "",
    },
    reducers: {
        changeAge: (state,action)=>{
            state.age = action.payload
        }
    }
})

export const {

} = eeSlice.actions

export default eeSlice.reducer