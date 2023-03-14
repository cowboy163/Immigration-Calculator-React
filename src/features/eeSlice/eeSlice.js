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
        subScoreA: [],
        spouseChoice: "",
    },
    reducers: {
        changeAge: (state,action)=>{
            let val = action.payload
            val = numInput(val, 2)
            state.age = val
        },
        changeEducation: (state,action) => {
            let val = action.payload[0]
            state.education = val
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
            state.subScoreA[lineIndex] = calcSubScore(val)
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

            state.subScoreA[lineIndex] = calcSubScore(val)
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

            state.subScoreA[lineIndex] = calcSubScore(val)
        },
        changeInEx: (state, action) => {
            let val = action.payload[0]
            state.experience[0] = val

            const lineIndex = action.payload[1]
            state.subScoreA[lineIndex] = calcSubScore(val)
        },
        changeOutEx: (state, action) => {
            let val = action.payload[0]
            state.experience[1] = val

            const lineIndex = action.payload[1]
            state.subScoreA[lineIndex] = calcSubScore(val)
        },
        changeSpouseChoice: (state, action) => {
            state.spouseChoice = action.payload
        },
        changeSubScore: (state, action) => {
            const score = action.payload[0]
            const index = action.payload[1]
            state.subScoreA[index] = score
        }
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
    changeSpouseChoice,
    changeSubScore,
} = eeSlice.actions

export default eeSlice.reducer