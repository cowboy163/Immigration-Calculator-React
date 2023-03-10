import CalcSubTable from "../../../utility/CalcSubTable/CalcSubTable";
import ChoiceRow from "../../../components/CalcTable/contents/Language/ChoiceRow/ChoiceRow";
import {educationData} from "../../../data/eeCalc/eePartDData";
import {useDispatch, useSelector} from "react-redux";
import {changeEducation} from "../../../features/eeSlice/eeSlicePartD";

const EducationView = ({lineIndex}) => {
    const dispatch = useDispatch()
    const selected = useSelector(state => state.eeCalcPartD.education)
    const onChange = evt => {
        dispatch(changeEducation([evt.target.value, lineIndex]))
    }
    const choiceData = {
        content: educationData,
        onChange,
        selected,
    }
    return(
        <CalcSubTable>
                <ChoiceRow ChoiceData={choiceData}/>
        </CalcSubTable>
    )
}
export default EducationView