import {useDispatch, useSelector} from "react-redux";
import Education from "../../../components/CalcTable/contents/Education/Education";
import educationData from "../../../data/fswCalc/educationData";
import {changeEducation} from "../../../features/fswSlice/fswSlice";

const EducationView = ({lineIndex}) => {
    const dispatch = useDispatch()
    const selectValue = useSelector(state => state.fswCalc.education)

    return(
        <Education content={educationData}
                   onChange={evt => {dispatch(changeEducation([evt.target.value, lineIndex]))}}
                   value={selectValue}
        />
    )
}
export default EducationView