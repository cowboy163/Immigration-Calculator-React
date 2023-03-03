import Age from "../../../components/CalcTable/contents/Age/Age";
import {useDispatch, useSelector} from "react-redux";
import {changeAge} from "../../../features/eeSlice/eeSlice";

const AgeView = ({lineIndex}) => {
    const dispatch = useDispatch()
    const age = useSelector(state => state?.eeCalc?.age)

    return(
        <Age inputValue={age}
             onChange={evt => {dispatch(changeAge([evt.target.value, lineIndex]))}}
        />
    )
}
export default AgeView