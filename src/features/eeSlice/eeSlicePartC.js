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
        },
        changeCScore: (state, action) => {
            const score = action.payload[0]
            const index = action.payload[1]
            state.subScoreC[index] = score
        }
    },
})

export const {
    changeTopOption,
    changeCScore,

} = eeSlicePartC.actions

export default eeSlicePartC.reducer