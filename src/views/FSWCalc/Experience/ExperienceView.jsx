import CalcSubTable from "../../../utility/CalcSubTable/CalcSubTable";
import CalcSubTableRow from "../../../utility/CalcSubTable/CalcSubTableRow/CalcSubTableRow";
import CalcSubTableCol from "../../../utility/CalcSubTable/CalcSubTableCol/CalcSubTableCol";
import SelectBar from "../../../utility/SelectBar/SelectBar";
import {useDispatch, useSelector} from "react-redux";
import {changeExperience} from "../../../features/fswSlice/fswSlice";
import fswExperienceData from "../../../data/fswCalc/fswExperienceData";

const ExperienceView = ({lineIndex}) => {
    const dispatch = useDispatch()
    // fswEx in Canada control
    const fswExperience = useSelector(state => state.fswCalc.experience)
    const fswExperienceChange = evt => {
        let val = evt.target.value
        dispatch(changeExperience([val, lineIndex]))
    }
    const fswExperienceControl = {
        value: fswExperience,
        onChange: fswExperienceChange,
        content: fswExperienceData,
    }

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