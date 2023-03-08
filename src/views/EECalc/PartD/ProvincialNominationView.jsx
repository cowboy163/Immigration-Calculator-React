import CalcSubTable from "../../../utility/CalcSubTable/CalcSubTable";
import ChoiceRow from "../../../components/CalcTable/contents/Language/ChoiceRow/ChoiceRow";
import {useDispatch, useSelector} from "react-redux";
import {changeProvincialNomination} from "../../../features/eeSlice/eeSlicePartD";
import {provincialNominationData} from "../../../data/eeCalc/eePartDData";
const ProvincialNominationView = ({lineIndex}) => {
    const dispatch = useDispatch()
    const selected = useSelector(state => state.eeCalcPartD.provincialNomination)
    const onChange = evt => {
        dispatch(changeProvincialNomination([evt.target.value, lineIndex]))
    }
    const choiceData = {
        content: provincialNominationData,
        onChange,
        selected,
    }
    return(
        <CalcSubTable>
            <ChoiceRow ChoiceData={choiceData}/>
        </CalcSubTable>
    )
}
export default ProvincialNominationView