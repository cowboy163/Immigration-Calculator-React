import CalcSubTable from "../../../utility/CalcSubTable/CalcSubTable";
import CalcSubTableRow from "../../../utility/CalcSubTable/CalcSubTableRow/CalcSubTableRow";
import CalcSubTableCol from "../../../utility/CalcSubTable/CalcSubTableCol/CalcSubTableCol";
import RatioSelect from "../../../utility/RatioSelect/RatioSelect";

const Extra = ({extraData}) => {
    const {onChange, selected, content} = extraData
    return(
        <CalcSubTable>
            <CalcSubTableRow>
                <CalcSubTableCol>
                    <RatioSelect onChange={onChange}
                                 selected={selected}
                                 content={content}
                    />
                </CalcSubTableCol>
            </CalcSubTableRow>
        </CalcSubTable>
    )
}
export default Extra