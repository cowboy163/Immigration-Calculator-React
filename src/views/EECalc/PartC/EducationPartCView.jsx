import {contentPartC} from "../../../data/eeCalc/eePartCData";
import PartC from "../../../components/CalcTable/PartC/PartC";

const EducationPartCView = ({lineIndex}) => {
    return(
        <PartC data={contentPartC.education}/>
    )
}
export default EducationPartCView