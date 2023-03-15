import {contentPartC} from "../../../data/eeCalc/eePartCData";
import PartC from "../../../components/CalcTable/PartC/PartC";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {changeCScore} from "../../../features/eeSlice/eeSlicePartC";
import specialCalcLine5 from "../../../js/getScoresForEE/partC/specialCalcLine5";

const CertificatePartCView = ({lineIndex}) => {
    const dispatch = useDispatch()
    // score calculation
    const selection = useSelector(state => state.eeCalcPartC.topOption)
    const clb = useSelector(state => state.eeCalcPartC.clb)
    useEffect(() => {
        if(selection) {
            const ruleLocation = '/csv/EE/partC/certificate.csv'
            specialCalcLine5(selection, clb, ruleLocation)
                .then(data => {
                    dispatch(changeCScore([data, lineIndex]))
                })
        }
    }, [selection, clb, dispatch, lineIndex])
    return(
        <PartC data={contentPartC.certificate}/>
    )
}
export default CertificatePartCView