import CalcSubTable from "../../../utility/CalcSubTable/CalcSubTable";
import ChoiceRow from "../../../components/CalcTable/contents/Language/ChoiceRow/ChoiceRow";
import {useDispatch, useSelector} from "react-redux";
import {changeInvitation} from "../../../features/fswSlice/fswSlice";
import {invitationData} from "../../../data/fswCalc/invitationData";

const InvitationView = ({lineIndex}) => {
    const dispatch = useDispatch()
    const onChange = evt => {
        const val = evt.target.value
        dispatch(changeInvitation([val, lineIndex]))
    }
    const selected = useSelector(state => state.fswCalc.invitation)
    const choiceData = {
        content: invitationData,
        selected,
        onChange,
    }
    return(
        <CalcSubTable>
            <ChoiceRow ChoiceData={choiceData}/>
        </CalcSubTable>
    )
}
export default InvitationView