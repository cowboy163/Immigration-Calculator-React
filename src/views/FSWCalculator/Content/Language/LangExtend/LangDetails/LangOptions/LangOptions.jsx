import {useDispatch, useSelector} from "react-redux";
import RatioSelect from "../../../../../../../utility/RatioSelect/RatioSelect";
import {changeLangTest} from "../../../../../../../features/fswSlice/fswSlice";

const option1 = [
    {
        text: "雅思G类（IELTS-General）",
        value: "ielts-general",
    },
    {
        text: "思培（CELPIP）",
        value: "celpip",
    },
]
const option2 = [
    {
        text: "TEF Canada",
        value: "tef",
    },
    {
        text: "TCF Canada",
        value: "tcf",
    },
]
const options = [option1, option2]

const content1 = {
    group: "englishTest",
    options: options[0],
}

const content2 = {
    group: "frenchTest",
    options: options[1],
}

const LangOptions = ({index}) => {
    const langSelected = useSelector(state => state?.fswCalc?.language?.selected)
    const langTest = useSelector(state => state?.fswCalc?.language?.test)
    const dispatch = useDispatch()

    const handleChange = val => {
        dispatch(changeLangTest([val, index]))
    }

    return (
        <RatioSelect content={
            langSelected === "english" ?
                content1 : content2
        }
                     onChange={evt => handleChange(evt.target.value)}
                     selected={langTest}
        />
    )
}
export default LangOptions