import CalcSubTable from "../../../utility/CalcSubTable/CalcSubTable";
import {adaptionContents} from "../../../data/fswCalc/adaptionData";
import ChoiceRow from "../../../components/CalcTable/contents/Language/ChoiceRow/ChoiceRow";
import {useDispatch, useSelector} from "react-redux";
import {changeAdaption} from "../../../features/fswSlice/fswSlice";

const AdaptionView = ({lineIndex}) => {
    const dispatch = useDispatch()
    const selected = useSelector(state => state.fswCalc.adaptionValue)
    return(
        <CalcSubTable>
            {
                adaptionContents && adaptionContents?.map((item, index) =>
                    <ChoiceRow ChoiceData={
                        {
                            onChange: evt => {dispatch(changeAdaption([evt.target.value, lineIndex, index]))},
                            selected: selected[index],
                            content: item,
                        }
                    }
                               key={index}
                    />
                )
            }
        </CalcSubTable>
    )
}
export default AdaptionView