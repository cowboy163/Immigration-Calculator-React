import {contentPartC} from "../../../data/eeCalc/eePartCData";
import PartC from "../../../components/CalcTable/PartC/PartC";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import simpleScoreCalc from "../../../js/simpleScoreCalc";
import {changeCScore} from "../../../features/eeSlice/eeSlicePartC";

const CertificatePartCView = ({lineIndex}) => {
    const dispatch = useDispatch()
    // score calculation
    const selection = useSelector(state => state.eeCalcPartC.topOption)
    useEffect(() => {
        if(selection) {
            let score = simpleScoreCalc(selection, 25)
            dispatch(changeCScore([score, lineIndex]))
        }
    }, [selection, dispatch, lineIndex])
    return(
        <PartC data={contentPartC.certificate}/>
    )
}
export default CertificatePartCView