import CalcExtraRow from "../../../utility/CalcExtraRow/CalcExtraRow";
import SecScoreStyled from "./SecScore.styled";
import CalcSubTable from "../../../utility/CalcSubTable/CalcSubTable";
import CalcSubTableRow from "../../../utility/CalcSubTable/CalcSubTableRow/CalcSubTableRow";
import CalcSubTableCol from "../../../utility/CalcSubTable/CalcSubTableCol/CalcSubTableCol";


const SecScore = ({part, secScore}) => {
    return(
        <CalcExtraRow>
            <CalcSubTable>
                <CalcSubTableRow>
                    <CalcSubTableCol>
                        <SecScoreStyled>
                            {part}部分得分: {secScore}
                        </SecScoreStyled>
                    </CalcSubTableCol>
                </CalcSubTableRow>
            </CalcSubTable>
        </CalcExtraRow>
    )
}
export default SecScore