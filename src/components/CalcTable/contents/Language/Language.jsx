import CalcSubTable from "../../../../utility/CalcSubTable/CalcSubTable";
import ChoiceRow from "./ChoiceRow/ChoiceRow";
import LanguageMid from "./LanguageMid/LanguageMid";

const Language = ({langData}) => {

    return (
        <CalcSubTable>
            <ChoiceRow ChoiceData={langData.langTopData}/>
            {
                langData.langTopData.selected && <LanguageMid testChoiceData={langData.testChoiceData}/>
            }

        </CalcSubTable>
    )
}
export default Language