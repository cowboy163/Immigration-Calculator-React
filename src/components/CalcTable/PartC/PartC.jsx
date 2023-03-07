/*
 * @param {string[]} data - receive data
 */

import CalcSubTable from "../../../utility/CalcSubTable/CalcSubTable";
import CalcSubTableRow from "../../../utility/CalcSubTable/CalcSubTableRow/CalcSubTableRow";
import CalcSubTableCol from "../../../utility/CalcSubTable/CalcSubTableCol/CalcSubTableCol";

const PartC = ({data}) => {
    return(
        <CalcSubTable>
            {
                data && data.map((item, index) =>
                    <CalcSubTableRow key={index}>
                        <CalcSubTableCol>
                            {item}
                        </CalcSubTableCol>
                    </CalcSubTableRow>
                )
            }
        </CalcSubTable>
    )
}
export default PartC