import CalcExtraRow from "../../../utility/CalcExtraRow/CalcExtraRow";
import CalcSubTable from "../../../utility/CalcSubTable/CalcSubTable";
import CalcSubTableRow from "../../../utility/CalcSubTable/CalcSubTableRow/CalcSubTableRow";
import CalcSubTableCol from "../../../utility/CalcSubTable/CalcSubTableCol/CalcSubTableCol";
import TextAlignCenterStyled from "../../../utility/TextAlignCenter/TextAlignCenter.styled";
import RatioSelect from "../../../utility/RatioSelect/RatioSelect";

const CalcOther = ({other}) => {
    const {content, selected, onChange} = other
    return(
        <CalcExtraRow bgColor="#faf9e6">
            <CalcSubTable>
                <CalcSubTableRow>
                    <CalcSubTableCol>
                        <TextAlignCenterStyled>
                            <RatioSelect content={content}
                                         selected={selected}
                                         onChange={onChange}
                            />
                        </TextAlignCenterStyled>
                    </CalcSubTableCol>
                </CalcSubTableRow>
            </CalcSubTable>
        </CalcExtraRow>
    )
}
export default CalcOther