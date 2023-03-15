import CalcSubTable from "../../../utility/CalcSubTable/CalcSubTable";
import ChoiceRow from "../../../components/CalcTable/contents/Language/ChoiceRow/ChoiceRow";
import {relativesData} from "../../../data/eeCalc/eePartDData";
import {useDispatch, useSelector} from "react-redux";
import {changeRelatives, changeSubDScore} from "../../../features/eeSlice/eeSlicePartD";
import {useEffect} from "react";
import getAdditionalScore from "../../../js/getScoresForEE/partD/getAdditionalScore";

const RelativesView = ({lineIndex}) => {
    const dispatch = useDispatch()
    const onChange = evt => {
        const val = evt.target.value
        dispatch(changeRelatives(val))
    }
    const selected = useSelector(state => state.eeCalcPartD.relativeOption)
    const choiceData = {
        content: relativesData,
        selected,
        onChange,
    }
    // score
    useEffect(() => {
        if(selected) {
            const startIndex = 0
            getAdditionalScore(selected, startIndex)
                .then(data => {
                    dispatch(changeSubDScore([data, lineIndex]))
                })
        }
    }, [selected, dispatch, lineIndex])

    return(
        <CalcSubTable>
            <ChoiceRow ChoiceData={choiceData}/>
        </CalcSubTable>
    )
}
export default RelativesView