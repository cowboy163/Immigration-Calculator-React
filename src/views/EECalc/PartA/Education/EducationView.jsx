import Education from "../../../../components/CalcTable/contents/Education/Education";
import educationData from "../../../../data/eeCalc/educationData";
import {useDispatch, useSelector} from "react-redux";
import {changeEducation, changeSubScore} from "../../../../features/eeSlice/eeSlice";
import {useEffect} from "react";
import getEducationScore from "../../../../js/getScoresForEE/getEducationScore";

const EducationView = ({lineIndex}) => {
    const dispatch = useDispatch()
    const selectValue = useSelector(state => state.eeCalc.education)
    const spouse = useSelector(state => state.eeCalc.spouseChoice)
    const handleChange = evt => {
        dispatch(changeEducation(evt.target.value))
    }
    useEffect(() => {
        const ruleLocation = 'csv/EE/education.csv'
        getEducationScore(selectValue, ruleLocation, spouse)
            .then(data => {
                dispatch(changeSubScore([data, lineIndex]))
            })
    }, [selectValue, dispatch, lineIndex, spouse])

    return(
        <Education content={educationData}
                   onChange={evt => {handleChange(evt)}}
                   value={selectValue}
        />
    )
}
export default EducationView