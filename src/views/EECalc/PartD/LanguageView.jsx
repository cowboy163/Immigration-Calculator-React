import CalcSubTable from "../../../utility/CalcSubTable/CalcSubTable";
import CalcSubTableRow from "../../../utility/CalcSubTable/CalcSubTableRow/CalcSubTableRow";
import CalcSubTableCol from "../../../utility/CalcSubTable/CalcSubTableCol/CalcSubTableCol";
import TextAlignCenterStyled from "../../../utility/TextAlignCenter/TextAlignCenter.styled";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import getAdditionalScore from "../../../js/getScoresForEE/partD/getAdditionalScore";
import {changeSubDScore} from "../../../features/eeSlice/eeSlicePartD";

const LanguageView = ({lineIndex}) => {
    const dispatch = useDispatch()
    const language = useSelector(state => state.eeCalc.language)
    const otherLang = useSelector(state => state.eeCalc.otherLang)
    const clb = useSelector(state => state.eeCalcPartC.clb)
    const otherClb = useSelector(state => state.eeCalcPartC.otherClb)
    useEffect(() => {
        if(language.selected === 'french') {
            const val = [clb, otherClb]
            const startIndex = 2
            getAdditionalScore(val, startIndex)
                .then(data => {
                    dispatch(changeSubDScore([data, lineIndex]))
                })
        }
    }, [language, otherLang, clb, otherClb, dispatch, lineIndex])
    return(
        <CalcSubTable>
            <CalcSubTableRow>
                <CalcSubTableCol>
                    <TextAlignCenterStyled>
                        <p>您法语的每项分数是否都达到NCLC 7？</p>
                        <p>（该部分自动计算）</p>
                    </TextAlignCenterStyled>
                </CalcSubTableCol>
            </CalcSubTableRow>
        </CalcSubTable>
    )
}
export default LanguageView