import Input from "../../../../components/Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {changeAge} from "../../../../features/fswSlice/fswSlice";

const placeholder = "年龄"
const Age = ({index}) => {
    const dispatch = useDispatch()
    const inputValue = useSelector(state => state?.fswCalc?.age)

    const handleChange = val => {
        dispatch(changeAge([val, index]))
    }

    return (
        <div>
            <Input placeholder={placeholder}
                   value={inputValue}
                   onChange={(evt) => handleChange(evt.target.value)}
            />
        </div>

    )
}
export default Age