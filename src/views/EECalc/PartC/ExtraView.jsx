import Extra from "../../../components/CalcTable/Extra/Extra";
import {topOptionContent} from "../../../data/eeCalc/eePartCData";
import {useDispatch, useSelector} from "react-redux";
import {changeTopOption} from "../../../features/eeSlice/eeSlicePartC";

const ExtraView = () => {
    const dispatch = useDispatch()
    const topOption = useSelector(state => state.eeCalcPartC.topOption)
    const onChange = evt => {
        dispatch(changeTopOption(evt.target.value))
    }
    const selected = topOption
    const content = topOptionContent
    const extraData = {
        onChange,
        selected,
        content,
    }

    return(
        <Extra extraData={extraData}/>
    )
}
export default ExtraView