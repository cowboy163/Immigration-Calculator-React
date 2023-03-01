import {createSlice} from "@reduxjs/toolkit";

export const fswSlice = createSlice({
    name: "fswCalc",
    initialState: {
        age: "",
        education: "",
        language: {
            selected: "",
            test: "",
            testScore: ["","","",""]
        },
        score: [],
    },
    reducers: {
        changeAge: (state, action) => {
            let val = action.payload[0]

            // leave 0 only once
            val = val.replace(/^0{2,}/, "0")
            // number only
            val = val.replace(/[^\d]/g, "")
            // 2 digit only
            val = val.slice(0, 2)

            state.age = val
            // calculate the score
            let index = action.payload[1]
            state.score[index] = val? "5":"0"
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
            // update language
            let val = action.payload[0]
            // state.language = fswSlice.getInitialState().language
            state.language.selected = val

            //calculate the score
            let index = action.payload[1]
            state.score[index] = val? "20":"0"
        },
        changeLangTest: (state, action) => {
            // update language test
            let val = action.payload[0]
            state.language.test = val

            //calculate the score
            let index = action.payload[1]
            state.score[index] = val? "40":"0"
        },
        changeTestScore: (state, action) => {
            let val = action.payload[0]
            let index = action.payload[1]
            let testIndex = action.payload[2]

            // leave 0 only once
            val = val.replace(/^0{2,}/, "0")
            // number only
            val = val.replace(/[^\d]/g, "")
            // 2 digit only
            val = val.slice(0, 3)

            state.language.testScore[testIndex] = val

            //calculate the score
            state.score[index] = val? "60":"0"
        }
    }
})

export const {
    changeAge,
    changeEducation,
    changeLanguage,
    changeLangTest,
    changeTestScore,
} = fswSlice.actions

export default fswSlice.reducer