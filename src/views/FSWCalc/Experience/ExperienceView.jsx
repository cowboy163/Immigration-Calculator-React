import CalcSubTable from "../../../utility/CalcSubTable/CalcSubTable";
import CalcSubTableRow from "../../../utility/CalcSubTable/CalcSubTableRow/CalcSubTableRow";
import CalcSubTableCol from "../../../utility/CalcSubTable/CalcSubTableCol/CalcSubTableCol";
import SelectBar from "../../../utility/SelectBar/SelectBar";
import {useDispatch, useSelector} from "react-redux";
import {changeExperience, changeScore} from "../../../features/fswSlice/fswSlice";
import fswExperienceData from "../../../data/fswCalc/fswExperienceData";
import {useEffect} from "react";
import getRuleLocation from "../../../js/getRuleLocation";
import getEducationScoreForFSW from "../../../js/getEducationScoreForFSW/getEducationScoreForFSW";

const ExperienceView = ({lineIndex}) => {
    const dispatch = useDispatch()
    // fswEx in Canada control
    const fswExperience = useSelector(state => state.fswCalc.experience)
    const fswExperienceChange = evt => {
        let val = evt.target.value
        dispatch(changeExperience(val))
    }
    const fswExperienceControl = {
        value: fswExperience,
        onChange: fswExperienceChange,
        content: fswExperienceData,
    }
    useEffect(() => {
        const ruleLocation = getRuleLocation(['FSW', 'experience'])
        getEducationScoreForFSW(fswExperience, ruleLocation)
            .then(data => {
                dispatch(changeScore([data, lineIndex]))
            })
    }, [fswExperience, dispatch, lineIndex])

    return(
        <CalcSubTable>
            <CalcSubTableRow>
                <CalcSubTableCol>
                    <SelectBar
                        value={fswExperienceControl.value}
                        onChange={fswExperienceControl.onChange}
                        content={fswExperienceControl.content}
                    />
                </CalcSubTableCol>
            </CalcSubTableRow>
        </CalcSubTable>
    )
}
export default ExperienceView