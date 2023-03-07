import Education from "../../../../components/CalcTable/contents/Education/Education";
import educationData from "../../../../data/eeCalc/PartB/educationDataPartB";
import {useDispatch, useSelector} from "react-redux";
import {changeEducation} from "../../../../features/eeSlice/eeSlicePartB";

const EducationView = ({lineIndex}) => {
    const dispatch = useDispatch()
    const selectValue = useSelector(state => state?.eeCalcPartB?.education)

    return(
        <Education content={educationData}
                   onChange={evt => {dispatch(changeEducation([evt.target.value, lineIndex]))}}
                   value={selectValue}
        />
    )
}
export default EducationView