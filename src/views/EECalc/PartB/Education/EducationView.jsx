import Education from "../../../../components/CalcTable/contents/Education/Education";
import educationData from "../../../../data/eeCalc/PartB/educationDataPartB";
import {useDispatch, useSelector} from "react-redux";
import {changeEducation, changeSubBScore} from "../../../../features/eeSlice/eeSlicePartB";
import {useEffect} from "react";
import getEducationScore from "../../../../js/getScoresForEE/getEducationScore";

const EducationView = ({lineIndex}) => {
    const dispatch = useDispatch()
    const selectValue = useSelector(state => state.eeCalcPartB.education)
    const handleChange = evt => {
        dispatch(changeEducation(evt.target.value))
    }
    useEffect(() => {
        const ruleLocation = '/csv/EE/spouse/education.csv'
        getEducationScore(selectValue, ruleLocation, "yes")
            .then(data => {
                dispatch(changeSubBScore([data, lineIndex]))
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