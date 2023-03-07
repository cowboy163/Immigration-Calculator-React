import Experience from "../../../../components/CalcTable/contents/Experience/Experience";
import eeExperienceData from "../../../../data/eeCalc/eeExperienceData";
import {useDispatch, useSelector} from "react-redux";
import {changeInEx, changeOutEx} from "../../../../features/eeSlice/eeSlice";

const ExperienceView = ({lineIndex}) => {
    const dispatch = useDispatch()
    // eeEx in Canada control
    const eeExValue = useSelector(state => state?.eeCalc?.experience)
    const eeExInValue = eeExValue[0]
    const eeExInChange = evt => {
        let val = evt.target.value
        dispatch(changeInEx([val, lineIndex]))
    }
    const eeExInControl = {
        value: eeExInValue,
        onChange: eeExInChange,
        content: eeExperienceData[0],
    }
    // eeEx out Canada control
    const eeExOutValue = eeExValue[1]
    const eeExOutChange = evt => {
        let val = evt.target.value
        dispatch(changeOutEx([val, lineIndex]))
    }
    const eeExOutControl = {
        value: eeExOutValue,
        onChange: eeExOutChange,
        content: eeExperienceData[1],
    }
    const eeExData = {
        eeExInControl,
        eeExOutControl,
    }

    return(
        <Experience eeExData={eeExData}/>
    )
}
export default ExperienceView