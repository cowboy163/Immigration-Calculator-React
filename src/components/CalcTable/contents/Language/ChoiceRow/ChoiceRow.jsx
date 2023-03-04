import CalcSubTableRow from "../../../../../utility/CalcSubTable/CalcSubTableRow/CalcSubTableRow";
import CalcSubTableCol from "../../../../../utility/CalcSubTable/CalcSubTableCol/CalcSubTableCol";
import RatioSelect from "../../../../../utility/RatioSelect/RatioSelect";
import styled from "styled-components";

const Styled = styled.div`
    text-align: center;
`

const ChoiceRow = ({ChoiceData, rowSpan}) => {
    return(
        <CalcSubTableRow>
            <CalcSubTableCol rowSpan={rowSpan}>
                <Styled>
                    <RatioSelect content={ChoiceData?.content}
                                 selected={ChoiceData?.selected}
                                 onChange={ChoiceData?.onChange}
                    />
                </Styled>

            </CalcSubTableCol>
        </CalcSubTableRow>
    )
}
export default ChoiceRow