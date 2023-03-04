/*
 * @param {string} inputValue - input value
 * @param {callback} onChange
 * @param {number} lineIndex - the number of rows, start from 0
 */

import Input from "../../../../utility/Input/Input";
import CalcSubTable from "../../../../utility/CalcSubTable/CalcSubTable";
import CalcSubTableRow from "../../../../utility/CalcSubTable/CalcSubTableRow/CalcSubTableRow";
import CalcSubTableCol from "../../../../utility/CalcSubTable/CalcSubTableCol/CalcSubTableCol";

const Age = ({inputValue, onChange}) => {
    return (
        <CalcSubTable>
            <CalcSubTableRow>
                <CalcSubTableCol>
                    <Input placeholder="年龄"
                           value={inputValue}
                           onChange={onChange}
                    />
                </CalcSubTableCol>
            </CalcSubTableRow>
        </CalcSubTable>

    )
}
export default Age