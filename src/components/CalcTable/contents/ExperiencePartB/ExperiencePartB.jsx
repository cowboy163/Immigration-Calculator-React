import CalcSubTable from "../../../../utility/CalcSubTable/CalcSubTable";
import CalcSubTableRow from "../../../../utility/CalcSubTable/CalcSubTableRow/CalcSubTableRow";
import CalcSubTableCol from "../../../../utility/CalcSubTable/CalcSubTableCol/CalcSubTableCol";
import SelectBar from "../../../../utility/SelectBar/SelectBar";

const ExperiencePartB = ({eeExData}) => {
    return(
        <CalcSubTable>
            <CalcSubTableRow>
                <CalcSubTableCol>
                    加拿大境内工作年数
                </CalcSubTableCol>
                <CalcSubTableCol>
                    <SelectBar
                        value={eeExData.eeExInControl.value}
                               onChange={eeExData.eeExInControl.onChange}
                               content={eeExData.eeExInControl.content}
                    />
                </CalcSubTableCol>
            </CalcSubTableRow>
        </CalcSubTable>
    )
}
export default ExperiencePartB