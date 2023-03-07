import {configureStore} from "@reduxjs/toolkit";
import fswCalcReducer from "./features/fswSlice/fswSlice";
import eeCalcReducer from "./features/eeSlice/eeSlice"
import eeCalcPartBReducer from "./features/eeSlice/eeSlicePartB"
import eeCalcPartCReducer from "./features/eeSlice/eeSlicePartC"
import eeCalcPartDReducer from "./features/eeSlice/eeSlicePartD";

export default configureStore({
    reducer: {
        fswCalc: fswCalcReducer,
        eeCalc: eeCalcReducer,
        eeCalcPartB: eeCalcPartBReducer,
        eeCalcPartC: eeCalcPartCReducer,
        eeCalcPartD: eeCalcPartDReducer,
    },
})