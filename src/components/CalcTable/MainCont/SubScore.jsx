import CalcSubTable from "../../../utility/CalcSubTable/CalcSubTable";
import CalcSubTableRow from "../../../utility/CalcSubTable/CalcSubTableRow/CalcSubTableRow";
import CalcSubTableCol from "../../../utility/CalcSubTable/CalcSubTableCol/CalcSubTableCol";

const SubScore = ({data}) => {
    return(
        <CalcSubTable>
            {
                data? (
                    typeof data !== "string"?
                        data.map((item, index) =>
                            <CalcSubTableRow key={index}>
                                 <CalcSubTableCol>
                                     {item}
                                 </CalcSubTableCol>
                             </CalcSubTableRow>
                        )
                        :
                        <CalcSubTableRow>
                            <CalcSubTableCol>
                                {data}
                            </CalcSubTableCol>
                        </CalcSubTableRow>

                )
                    :
                <tr>
                    <td></td>
                </tr>
            }
        </CalcSubTable>
    )
}
export default SubScore