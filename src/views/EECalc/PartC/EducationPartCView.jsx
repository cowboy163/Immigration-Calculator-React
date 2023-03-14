import {contentPartC} from "../../../data/eeCalc/eePartCData";
import PartC from "../../../components/CalcTable/PartC/PartC";
import {useSelector} from "react-redux";

const EducationPartCView = ({lineIndex}) => {
    const education = useSelector(state => state.eeCalc.education)
    const language = useSelector(state => state.eeCalc.language)

    return(
        <PartC data={contentPartC.education}/>
    )
}
export default EducationPartCView