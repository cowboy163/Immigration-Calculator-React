import eeExperienceData from "../../../../data/eeCalc/eeExperienceData";
import {useDispatch, useSelector} from "react-redux";
import {changeInEx} from "../../../../features/eeSlice/eeSlicePartB";
import ExperiencePartB from "../../../../components/CalcTable/contents/ExperiencePartB/ExperiencePartB";

const ExperienceView = ({lineIndex}) => {
    const dispatch = useDispatch()
    // eeEx Part2 in Canada control
    const eeExValue = useSelector(state => state?.eeCalcPartB?.experience)
    const eeExInValue = eeExValue[0]
    const eeExInChange = evt => {
        let val = evt.target.value
        dispatch(changeInEx([val, lineIndex]))
    }
    const eeExInControl = {
        value: eeExInValue,
        onChange: eeExInChange,
        content: eeExperienceData[2],
    }
    const eeExData = {
        eeExInControl,
    }

    return(
        <ExperiencePartB eeExData={eeExData}/>
    )
}
export default ExperienceView