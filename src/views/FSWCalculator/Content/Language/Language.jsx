import RatioSelect from "../../../../components/RatioSelect/RatioSelect";
import LangExtend from "./LangExtend/LangExtend";
import {useDispatch} from "react-redux";
import {changeLanguage} from "../../../../features/fswSlice/fswSlice";
import {useState} from "react";

const options = [
    {
        text: "英语",
        value: "english",
    },
    {
        text: "法语",
        value: "french",
    },
]

const content = {
    group: "language",
    options: options,
}

const Language = ({index}) => {
    const dispatch = useDispatch()

    const [showEx, setShowEx] = useState(false)

    const handleChange = val => {
        dispatch(changeLanguage([val, index]))
        setShowEx(true)
    }

    return(
        <div>
            <RatioSelect content={content}
                         onChange={evt => handleChange(evt.target.value)}
            />
            {
                showEx && <LangExtend/>
            }

        </div>
    )
}
export default Language