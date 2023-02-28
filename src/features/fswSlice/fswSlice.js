import {createSlice} from "@reduxjs/toolkit";

export const fswSlice = createSlice({
    name: "fswCalc",
    initialState: {
        age: "",
        education: "",
        language: {
            english : {
                selected: false,
                testName: "",
                readingScore: "",
                writingScore: "",
                listeningScore: "",
                speakingScore: "",
            }
        },
        score: [],
    },
    reducers: {
        changeAge: (state, action) => {
            state = {...state, age:action.payload[0]}
            // calculate the score
            let index = action.payload[1]
            let dupScore = [...state.score]
            dupScore[index] = action.payload[0]? "5":""
            state = {...state, score: dupScore}
            return state
        },
        changeEducation: (state,action) => {
            state = {...state, education: action.payload[0]}
            //calculate the score
            let index = action.payload[1]
            let dupScore = [...state.score]
            dupScore[index] = action.payload[0]? "10":""
            state = {...state, score: dupScore}
            return state
        },
        changeLanguage: (state, action) => {
            let value = action.payload[0]
            state = {...state, language: {}}
            let langDetail = {
                selected: true,
                testName: "",
                readingScore: "",
                writingScore: "",
                listeningScore: "",
                speakingScore: "",
            }
            state = {...state, language: {...state.language, [value]:langDetail}}

            //calculate the score
            let index = action.payload[1]
            let dupScore = [...state.score]
            dupScore[index] = action.payload[0]? "20":""
            state = {...state, score: dupScore}

            return state
        }
    }
})

export const {
    changeAge,
    changeEducation,
    changeLanguage,
} = fswSlice.actions