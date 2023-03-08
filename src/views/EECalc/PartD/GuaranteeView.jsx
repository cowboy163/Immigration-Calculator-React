import CalcSubTable from "../../../utility/CalcSubTable/CalcSubTable";
import ChoiceRow from "../../../components/CalcTable/contents/Language/ChoiceRow/ChoiceRow";
import {useDispatch, useSelector} from "react-redux";
import {changeGuarantee} from "../../../features/eeSlice/eeSlicePartD";
import {guaranteeData} from "../../../data/eeCalc/eePartDData";

const GuaranteeView = ({lineIndex}) => {
    const dispatch = useDispatch()
    const selected = useSelector(state => state.eeCalcPartD.guarantee)
    const onChange = evt => {
        dispatch(changeGuarantee([evt.target.value, lineIndex]))
    }
    const choiceData = {
        content: guaranteeData,
        onChange,
        selected,
    }
    return(
        <CalcSubTable>
            <ChoiceRow ChoiceData={choiceData}/>
        </CalcSubTable>
    )
}
export default GuaranteeView