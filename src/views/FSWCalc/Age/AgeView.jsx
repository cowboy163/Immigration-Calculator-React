import {useDispatch, useSelector} from "react-redux";
import Age from "../../../components/CalcTable/contents/Age/Age";
import {changeAge, changeScore} from "../../../features/fswSlice/fswSlice";
import getAgeScoreForFSW from "../../../js/ageForFSW";
import {useEffect} from "react";

const AgeView = ({lineIndex}) => {
    const dispatch = useDispatch()
    const age = useSelector(state => state.fswCalc.age)
    const handleChange = evt => {
        let val = evt.target.value
        dispatch(changeAge(val))
    }
    useEffect(() => {
        const ruleLocation = 'csv/ageForFSW.csv'
        getAgeScoreForFSW(age, ruleLocation).then(score => {
            dispatch(changeScore([score, lineIndex]))
        })
    }, [age, dispatch, lineIndex])

    return(
        <Age inputValue={age}
             onChange={evt => {handleChange(evt)}}
        />
    )
}
export default AgeView