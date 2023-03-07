import {contentPartC} from "../../../data/eeCalc/eePartCData";
import PartC from "../../../components/CalcTable/PartC/PartC";

const CertificatePartCView = ({lineIndex}) => {
    return(
        <PartC data={contentPartC.certificate}/>
    )
}
export default CertificatePartCView