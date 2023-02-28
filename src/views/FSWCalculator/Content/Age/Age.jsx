import Input from "../../../../components/Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {changeAge} from "../../../../features/fswSlice/fswSlice";

const placeholder = "年龄"
const Age = ({index}) => {
    const dispatch = useDispatch()
    const inputValue = useSelector(state => state?.fswCalc?.age)

    const handleChange = val => {
        // leave 0 only once
        val = val.replace(/^0{2,}/, "0")
        // number only
        val = val.replace(/[^\d]/g, "")
        // 2 digit only
        val = val.slice(0, 2)


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