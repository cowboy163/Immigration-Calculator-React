import RatioSelect from "../../../../utility/RatioSelect/RatioSelect";
import LangExtend from "./LangExtend/LangExtend";
import {useDispatch, useSelector} from "react-redux";
import {changeLanguage} from "../../../../features/fswSlice/fswSlice";
import {useEffect, useState} from "react";

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
    const selected = useSelector(state => state?.fswCalc?.language?.selected)
    const check = useSelector(state => state)

    useEffect(() => {
        console.log('check point ', check)
    }, [check])

    const handleChange = val => {
        dispatch(changeLanguage([val, index]))
        setShowEx(true)
    }

    return(
        <div>
            <RatioSelect content={content}
                         onChange={evt => handleChange(evt.target.value)}
                         selected={selected}
            />
            {
                showEx && <LangExtend index={index}/>
            }
        </div>
    )
}
export default Language