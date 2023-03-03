import Language from "../../../components/CalcTable/contents/Language/Language";
import {useDispatch, useSelector} from "react-redux";
import {languageData} from "../../../data/languageData";
import {changeLanguage, changeTest} from "../../../features/eeSlice/eeSlice";
import {useEffect} from "react";

const LanguageView = ({lineIndex}) => {
    const dispatch = useDispatch()

    // language-top data
    const langSelected = useSelector(state => state?.eeCalc?.language?.selected)
    const langChange = evt => {
        const val = evt.target.value
        const index = lineIndex
        const optionIndex = evt.target.attributes.index.value
        dispatch(changeLanguage([val, index, optionIndex]))
    }
    const langTopData = {
        content: languageData,
        selected: langSelected,
        onChange: langChange,
    }

    // test choice data
    const testSelected = useSelector(state => state?.eeCalc?.language?.test)
    const langIndex = useSelector(state => state?.eeCalc?.language?.optionIndex)
    const testChange = evt => {
        const val = evt.target.value
        dispatch(changeTest(val))
    }
    const testOptions = languageData.options[+langIndex].test
    const testChoiceData = {
        content: {options: testOptions},
        selected: testSelected,
        onChange: testChange,
    }

    const langData = {
        langTopData,
        testChoiceData,
    }

    return(
        <Language langData={langData}/>
    )
}
export default LanguageView