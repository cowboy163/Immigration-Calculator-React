import {createSlice} from "@reduxjs/toolkit";
import {numInput} from "../../utility/inputRule";
import {calcSubScore} from "../../utility/calcScore";
import {useDispatch} from "react-redux";

export const fswSlice = createSlice({
    name: "fswCalc",
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
        experience: "",
        invitation: "",
        score: ["","","","","",""],
        adaptionValue: ["","","","","","",""],
    },
    reducers: {
        changeAge: (state, action) => {
            let val = action.payload
            val = numInput(val, 2)
            state.age = val
        },
        changeEducation: (state,action) => {
            // update education
            let val = action.payload[0]
            state.education = val

            //calculate the score
            let index = action.payload[1]
            state.score[index] = val? "10":"0"
        },
        changeLanguage: (state, action) => {
            let val = action.payload[0]
            let lineIndex = action.payload[1]
            let optionIndex = action.payload[2]

            state.language.selected = val
            state.language.optionIndex = optionIndex
            state.language.test = ""
            state.language.testScore = fswSlice.getInitialState().language.testScore
            state.otherLang.selected = ""
            state.score[lineIndex] = calcSubScore(val)
        },
        changeLangTest: (state, action) => {
            // update language test
            state.language.testScore = fswSlice.getInitialState().language.testScore
            state.language.test = action.payload
        },
        changeTestScore: (state, action) => {
            let lineIndex = action.payload[1]
            let val = action.payload[0]
            val = numInput(val, 3)
            let inputIndex = action.payload[2]
            state.language.testScore[inputIndex] = val

            state.score[lineIndex] = calcSubScore(val)
        },
        changeOtherLang: (state, action) => {
            state.otherLang.selected = action.payload
            if(state.otherLang.selected !== "yes") {
                state.otherLang.test = ""
                state.otherLang.testScore = ["", "", "", ""]
            }
        },
        changeOtherLangTest: (state, action) => {
            state.otherLang.test = action.payload
            state.otherLang.testScore = fswSlice.getInitialState().otherLang.testScore
        },
        changeOtherLangScore: (state, action) => {
            let lineIndex = action.payload[1]
            let val = action.payload[0]
            val = numInput(val, 3)
            let inputIndex = action.payload[2]
            state.otherLang.testScore[inputIndex] = val

            state.score[lineIndex] = calcSubScore(val)
        },
        changeExperience: (state, action) => {
            let val = action.payload[0]
            state.experience = val

            const lineIndex = action.payload[1]
            state.score[lineIndex] = calcSubScore(val)
        },
        changeInvitation: (state, action) => {
            let val = action.payload[0]
            state.invitation = val
            const lineIndex = action.payload[1]
            state.score[lineIndex] = calcSubScore(val)
        },
        changeAdaption: (state, action) => {
            let val = action.payload[0]
            const lineIndex = action.payload[1]
            const optionIndex = action.payload[2]
            state.adaptionValue[optionIndex] = val
            state.score[lineIndex] = calcSubScore(val)
        },
        changeScore: (state, action) => {
            const score = action.payload[0]
            const index = action.payload[1]
            state.score[index] = score
        }

    }
})

export const {
    changeAge,
    changeEducation,
    changeLanguage,
    changeLangTest,
    changeTestScore,
    changeOtherLang,
    changeOtherLangTest,
    changeOtherLangScore,
    changeExperience,
    changeInvitation,
    changeAdaption,
    changeScore,
} = fswSlice.actions

export default fswSlice.reducer