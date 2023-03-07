import Education from "../../../../components/CalcTable/contents/Education/Education";
import educationData from "../../../../data/eeCalc/educationData";
import {useDispatch, useSelector} from "react-redux";
import {changeEducation} from "../../../../features/eeSlice/eeSlice";

const EducationView = ({lineIndex}) => {
    const dispatch = useDispatch()
    const selectValue = useSelector(state => state?.eeCalc?.education)

    return(
        <Education content={educationData}
                   onChange={evt => {dispatch(changeEducation([evt.target.value, lineIndex]))}}
                   value={selectValue}
        />
    )
}
export default EducationView