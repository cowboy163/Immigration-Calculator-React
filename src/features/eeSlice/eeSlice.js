import {createSlice} from "@reduxjs/toolkit";
import {numInput} from "../../utility/inputRule";
import {calcSubScore} from "../../utility/calcScore";

export const eeSlice = createSlice({
    name: "eeCalc",
    initialState: {
        age: "",
        education: "",
        language: {
            selected: "",
            optionIndex: "",
            test: "",
        },
        subScore: [],
    },
    reducers: {
        changeAge: (state,action)=>{
            let val = action.payload[0]
            val = numInput(val, 2)
            state.age = val

            const lineIndex = action.payload[1]
            state.subScore[lineIndex] = calcSubScore(val)
        },
        changeEducation: (state,action) => {
            let val = action.payload[0]
            state.education = val

            const lineIndex = action.payload[1]
            state.subScore[lineIndex] = calcSubScore(val)
        },
        changeLanguage: (state, action) => {
            let val = action.payload[0]
            let lineIndex = action.payload[1]
            let optionIndex = action.payload[2]

            state.language.selected = val
            state.language.optionIndex = optionIndex
            state.language.test = ""
            state.subScore[lineIndex] = calcSubScore(val)
        },
        changeTest: (state, action) => {
            state.language.test = action.payload
            console.log("state check", {...state.language})
        },
    }
})

export const {
    changeAge,
    changeEducation,
    changeLanguage,
    changeTest,
} = eeSlice.actions

export default eeSlice.reducer