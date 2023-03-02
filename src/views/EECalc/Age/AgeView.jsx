import Age from "../../../components/CalcTable/contents/Age/Age";
import {useDispatch, useSelector} from "react-redux";
import {changeAge} from "../../../features/fswSlice/fswSlice";

const AgeView = () => {
    const dispatch = useDispatch()
    const age = useSelector(state => state?.eeCalc?.age)

    return(
        <Age inputValue={age}
             onChange={evt => {dispatch(changeAge)}}
        />
    )
}
export default AgeView