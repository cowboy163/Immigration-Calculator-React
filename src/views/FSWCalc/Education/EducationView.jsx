import {useDispatch, useSelector} from "react-redux";
import Education from "../../../components/CalcTable/contents/Education/Education";
import educationData from "../../../data/fswCalc/educationData";
import {changeEducation, changeScore} from "../../../features/fswSlice/fswSlice";
import {useEffect} from "react";
import getEducationScoreForFSW from "../../../js/getEducationScoreForFSW/getEducationScoreForFSW";

const EducationView = ({lineIndex}) => {
    const dispatch = useDispatch()
    const selectValue = useSelector(state => state.fswCalc.education)
    const handleChange = evt => {
        dispatch(changeEducation(evt.target.value))
    }
    useEffect(() => {
        const ruleLocation = 'csv/educationForFSW.csv'
        getEducationScoreForFSW(selectValue, ruleLocation)
            .then(data => {
                dispatch(changeScore([data, lineIndex]))
            })
    }, [selectValue, dispatch, lineIndex])

    return(
        <Education content={educationData}
                   onChange={evt => {handleChange(evt)}}
                   value={selectValue}
        />
    )
}
export default EducationView