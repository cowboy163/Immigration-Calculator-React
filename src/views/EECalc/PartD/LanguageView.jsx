import CalcSubTable from "../../../utility/CalcSubTable/CalcSubTable";
import CalcSubTableRow from "../../../utility/CalcSubTable/CalcSubTableRow/CalcSubTableRow";
import CalcSubTableCol from "../../../utility/CalcSubTable/CalcSubTableCol/CalcSubTableCol";
import TextAlignCenterStyled from "../../../utility/TextAlignCenter/TextAlignCenter.styled";

const LanguageView = () => {
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