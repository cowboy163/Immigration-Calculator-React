import {configureStore} from "@reduxjs/toolkit";
import {fswSlice} from "./features/fswSlice/fswSlice";

export default configureStore({
    reducer: {
        fswCalc: fswSlice.reducer
    },
})