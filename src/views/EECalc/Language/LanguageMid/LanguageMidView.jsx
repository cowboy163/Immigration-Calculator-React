import LanguageMid from "../../../../components/CalcTable/contents/Language/LanguageMid/LanguageMid";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {languageData} from "../../../../data/languageData";

const LanguageMidView = ({lineIndex}) => {
    const optionIndex = useSelector(state => state?.eeCalc?.language?.optionIndex)

    useEffect(() => {
        console.log("option index check", languageData.options[optionIndex].test)
    }, [optionIndex])
    return(
        <LanguageMid/>
    )
}

export default LanguageMidView