import {createSlice} from "@reduxjs/toolkit";
import {calcSubScore} from "../../utility/calcScore";

export const eeSlicePartD = createSlice({
    name: "eeCalcPartD",
    initialState: {
        relativeOption: "",
        subScoreD: ["", "", "", "", ""]
    },
    reducers: {
        changeRelatives: (state, action) => {
            let val = action.payload[0]
            state.relativeOption = val
            const lineIndex = action.payload[1]
            state.subScoreD[lineIndex] = calcSubScore(val)
        }
    },
})

export const {
    changeRelatives,
} = eeSlicePartD.actions
export default eeSlicePartD.reducer