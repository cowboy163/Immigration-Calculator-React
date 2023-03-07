import {createSlice} from "@reduxjs/toolkit";

export const eeSlicePartC = createSlice({
    name: "eeCalcPartC",
    initialState: {
        topOption: "",
        subScoreC: [["", ""], ["", ""], [""]]
    },
    reducers: {
        changeTopOption: (state, action) => {
            state.topOption = action.payload
        }
    },
})

export const {
    changeTopOption,

} = eeSlicePartC.actions

export default eeSlicePartC.reducer