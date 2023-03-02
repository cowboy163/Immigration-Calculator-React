import {configureStore} from "@reduxjs/toolkit";
import fswCalcReducer from "./features/fswSlice/fswSlice";
import eeCalcReducer from "./features/eeSlice/eeSlice"

export default configureStore({
    reducer: {
        fswCalc: fswCalcReducer,
        eeCalc: eeCalcReducer,
    },
})