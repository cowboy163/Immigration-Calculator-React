import {contentPartC} from "../../../data/eeCalc/eePartCData";
import PartC from "../../../components/CalcTable/PartC/PartC";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import getRuleLocation from "../../../js/getRuleLocation";
import getCLB from "../../../js/getScoresForEE/getCLB";
import {changeClb} from "../../../features/eeSlice/eeSlicePartC";
import specialCalcLine1 from "../../../js/getScoresForEE/partC/specialCalcLine1";

const EducationPartCView = ({lineIndex}) => {
    const education = useSelector(state => state.eeCalc.education)
    const language = useSelector(state => state.eeCalc.language)
    const clb = useSelector(state => state.eeCalcPartC.clb)
    const dispatch = useDispatch()
    useEffect(() => {
        if(language.test) {
            const dir = ['EE', 'language', language.test]
            const ruleLocation = getRuleLocation(dir)
            getCLB(language, ruleLocation)
                .then(clb => {
                    dispatch(changeClb(clb))
                })
        }
    }, [language, dispatch])

    useEffect(() => {
        const ruleLocation = '/csv/EE/partC/education.csv'
        specialCalcLine1(education, clb, ruleLocation)

    }, [education, clb])

    return(
        <PartC data={contentPartC.education}/>
    )
}
export default EducationPartCView