import CalcExtraRow from "../../../utility/CalcExtraRow/CalcExtraRow";
import CalcSubTable from "../../../utility/CalcSubTable/CalcSubTable";
import CalcSubTableRow from "../../../utility/CalcSubTable/CalcSubTableRow/CalcSubTableRow";
import CalcSubTableCol from "../../../utility/CalcSubTable/CalcSubTableCol/CalcSubTableCol";
import TextAlignCenterStyled from "../../../utility/TextAlignCenter/TextAlignCenter.styled";
import ChoiceRow from "../contents/Language/ChoiceRow/ChoiceRow";

const CalcOther = ({CalcOtherChoiceData}) => {
    return(
        <CalcExtraRow>
            <CalcSubTable>
                <CalcSubTableRow>
                    <CalcSubTableCol>
                        <TextAlignCenterStyled>
                            <p>您是否有配偶 / 伴侣， 且您的配偶 / 伴侣不是加拿大永久居民（PR）或公民（Citizen）</p>
                        </TextAlignCenterStyled>
                    </CalcSubTableCol>
                </CalcSubTableRow>
                <ChoiceRow ChoiceData={CalcOtherChoiceData}/>
            </CalcSubTable>
        </CalcExtraRow>
    )
}
export default CalcOther