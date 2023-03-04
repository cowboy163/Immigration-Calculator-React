import SelectBar from "../../../../utility/SelectBar/SelectBar";
import CalcSubTable from "../../../../utility/CalcSubTable/CalcSubTable";
import CalcSubTableRow from "../../../../utility/CalcSubTable/CalcSubTableRow/CalcSubTableRow";
import CalcSubTableCol from "../../../../utility/CalcSubTable/CalcSubTableCol/CalcSubTableCol";

const Education = ({content, onChange, value}) => {
    return(
        <CalcSubTable>
            <CalcSubTableRow>
                <CalcSubTableCol>
                    <SelectBar content={content}
                               onChange={onChange}
                               value={value}
                    />
                </CalcSubTableCol>
            </CalcSubTableRow>
        </CalcSubTable>

    )
}
export default Education