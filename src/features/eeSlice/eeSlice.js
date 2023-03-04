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
            testScore: ["","","",""]
        },
        otherLang: {
            selected: "",
            test: "",
            testScore: ["","","",""]
        },
        experience: ["", ""],
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
            state.language.testScore = eeSlice.getInitialState().language.testScore
            state.otherLang.selected = ""
            state.subScore[lineIndex] = calcSubScore(val)
        },
        changeTest: (state, action) => {
            state.language.test = action.payload
            state.language.testScore = eeSlice.getInitialState().language.testScore
        },
        changeScore: (state, action) => {
            let lineIndex = action.payload[1]
            let val = action.payload[0]
            val = numInput(val, 3)
            let inputIndex = action.payload[2]
            state.language.testScore[inputIndex] = val

            state.subScore[lineIndex] = calcSubScore(val)
        },
        changeOtherLang:(state, action) => {
            state.otherLang.selected = action.payload
            if(state.otherLang.selected !== "yes") {
                state.otherLang.test = ""
                state.otherLang.testScore = ["", "", "", ""]
            }
        },
        changeOtherLangTest: (state, action) => {
            state.otherLang.test = action.payload
            state.otherLang.testScore = eeSlice.getInitialState().otherLang.testScore
        },
        changeOtherLangScore: (state, action) => {
            let lineIndex = action.payload[1]
            let val = action.payload[0]
            val = numInput(val, 3)
            let inputIndex = action.payload[2]
            state.otherLang.testScore[inputIndex] = val

            state.subScore[lineIndex] = calcSubScore(val)
        },
        changeInEx: (state, action) => {
            let val = action.payload[0]
            state.experience[0] = val

            const lineIndex = action.payload[1]
            state.subScore[lineIndex] = calcSubScore(val)
        },
        changeOutEx: (state, action) => {
            let val = action.payload[0]
            state.experience[1] = val

            const lineIndex = action.payload[1]
            state.subScore[lineIndex] = calcSubScore(val)
        },
    }
})

export const {
    changeAge,
    changeEducation,
    changeLanguage,
    changeTest,
    changeScore,
    changeOtherLang,
    changeOtherLangTest,
    changeOtherLangScore,
    changeInEx,
    changeOutEx,
} = eeSlice.actions

export default eeSlice.reducer