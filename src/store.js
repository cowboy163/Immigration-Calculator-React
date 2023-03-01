import {configureStore} from "@reduxjs/toolkit";
import fswCalcReducer from "./features/fswSlice/fswSlice";

export default configureStore({
    reducer: {
        fswCalc: fswCalcReducer
    },
})