import {useDispatch, useSelector} from "react-redux";
import Age from "../../../components/CalcTable/contents/Age/Age";
import {changeAge} from "../../../features/fswSlice/fswSlice";

const AgeView = ({lineIndex}) => {
    const dispatch = useDispatch()
    const age = useSelector(state => state.fswCalc.age)

    return(
        <Age inputValue={age}
             onChange={evt => {dispatch(changeAge([evt.target.value, lineIndex]))}}
        />
    )
}
export default AgeView