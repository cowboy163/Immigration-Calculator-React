import {createSlice} from "@reduxjs/toolkit";

export const fswSlice = createSlice({
    name: "fswCalc",
    initialState: {
        age: "",
        education: "",
        score: [],
    },
    reducers: {
        changeAge: (state, action) => {
            state = {...state, age:action.payload[0]}
            // calculate the score
            let index = action.payload[1]
            let dupScore = [...state.score]
            dupScore[index] = 5
            state = {...state, score: dupScore}
            return state
        },
        changeEducation: (state,action) => {
            state = {...state, education: action.payload[0]}
            //calculate the score
            let index = action.payload[1]
            let dupScore = [...state.score]
            dupScore[index] = 10
            state = {...state, score: dupScore}
            return state
        },
    }
})

export const {changeAge, changeEducation} = fswSlice.actions