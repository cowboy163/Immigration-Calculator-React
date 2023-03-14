import Age from "../../../../components/CalcTable/contents/Age/Age";
import {useDispatch, useSelector} from "react-redux";
import {changeAge, changeSubScore} from "../../../../features/eeSlice/eeSlice";
import {useEffect} from "react";
import getAgeScore from "../../../../js/getScoresForEE/getAgeScore";

const AgeView = ({lineIndex}) => {
    const dispatch = useDispatch()
    const age = useSelector(state => state.eeCalc.age)
    const spouse = useSelector(state => state.eeCalc.spouseChoice)
    const handleChange = evt => {
        let val = evt.target.value
        dispatch(changeAge(val))
    }
    useEffect(() => {
        const ruleLocation = 'csv/EE/age.csv'
        getAgeScore(age, ruleLocation, spouse).then(score => {
            dispatch(changeSubScore([score, lineIndex]))
        })
    }, [age, dispatch, lineIndex, spouse])

    return(
        <Age inputValue={age}
             onChange={evt => {handleChange(evt)}}
        />
    )
}
export default AgeView