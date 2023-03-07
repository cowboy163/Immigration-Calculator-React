import CalcSubTable from "../../../utility/CalcSubTable/CalcSubTable";
import ChoiceRow from "../../../components/CalcTable/contents/Language/ChoiceRow/ChoiceRow";
import {relativesData} from "../../../data/eeCalc/eePartDData";
import {useDispatch, useSelector} from "react-redux";
import {changeRelatives} from "../../../features/eeSlice/eeSlicePartD";

const RelativesView = ({lineIndex}) => {
    const dispatch = useDispatch()
    const onChange = evt => {
        const val = evt.target.value
        dispatch(changeRelatives([val, lineIndex]))
    }
    const selected = useSelector(state => state.eeCalcPartD.relativeOption)
    const choiceData = {
        content: relativesData,
        selected,
        onChange,
    }

    return(
        <CalcSubTable>
            <ChoiceRow ChoiceData={choiceData}/>
        </CalcSubTable>
    )
}
export default RelativesView