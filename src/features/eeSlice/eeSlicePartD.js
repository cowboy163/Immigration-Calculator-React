import {createSlice} from "@reduxjs/toolkit";
import {calcSubScore} from "../../utility/calcScore";

export const eeSlicePartD = createSlice({
    name: "eeCalcPartD",
    initialState: {
        relativeOption: "",
        subScoreD: ["", "", "", "", ""],
        education: "",
        guarantee: "",
        provincialNomination: "",
    },
    reducers: {
        changeRelatives: (state, action) => {
            let val = action.payload[0]
            state.relativeOption = val
            const lineIndex = action.payload[1]
            state.subScoreD[lineIndex] = calcSubScore(val)
        },
        changeEducation: (state, action) => {
            let val = action.payload[0]
            state.education = val
            const lineIndex = action.payload[1]
            state.subScoreD[lineIndex] = calcSubScore(val)
        },
        changeGuarantee: (state, action) => {
            let val = action.payload[0]
            state.guarantee = val
            const lineIndex = action.payload[1]
            state.subScoreD[lineIndex] = calcSubScore(val)
        },
        changeProvincialNomination: (state, action) => {
            let val = action.payload[0]
            state.provincialNomination = val
            const lineIndex = action.payload[1]
            state.subScoreD[lineIndex] = calcSubScore(val)
        },
    },
})

export const {
    changeRelatives,
    changeEducation,
    changeGuarantee,
    changeProvincialNomination,
} = eeSlicePartD.actions
export default eeSlicePartD.reducer