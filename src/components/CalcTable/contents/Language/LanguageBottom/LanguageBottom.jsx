import CalcSubTableRow from "../../../../../utility/CalcSubTable/CalcSubTableRow/CalcSubTableRow";
import CalcSubTableCol from "../../../../../utility/CalcSubTable/CalcSubTableCol/CalcSubTableCol";
import ChoiceRow from "../ChoiceRow/ChoiceRow";
import TextAlignCenterStyled from "../../../../../utility/TextAlignCenter/TextAlignCenter.styled";

const LanguageBottom = ({otherLangData}) => {
    return(
        <>
            <CalcSubTableRow>
                <CalcSubTableCol rowSpan={4}>
                    <TextAlignCenterStyled>
                        您是否有另一门语言的成绩
                    </TextAlignCenterStyled>
                </CalcSubTableCol>
            </CalcSubTableRow>
            <ChoiceRow ChoiceData={otherLangData?.otherLangChoice}
                       rowSpan={4}
            />

        </>
    )
}
export default LanguageBottom