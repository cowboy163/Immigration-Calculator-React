import CalcSubTableRow from "../../../../../utility/CalcSubTable/CalcSubTableRow/CalcSubTableRow";
import CalcSubTableCol from "../../../../../utility/CalcSubTable/CalcSubTableCol/CalcSubTableCol";
import RatioSelect from "../../../../../utility/RatioSelect/RatioSelect";

const ChoiceRow = ({ChoiceData}) => {
    return(
        <CalcSubTableRow>
            <CalcSubTableCol>
                <RatioSelect content={ChoiceData.content}
                             selected={ChoiceData.selected}
                             onChange={ChoiceData.onChange}
                />
            </CalcSubTableCol>
        </CalcSubTableRow>
    )
}
export default ChoiceRow