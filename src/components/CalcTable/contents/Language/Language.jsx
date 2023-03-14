import CalcSubTable from "../../../../utility/CalcSubTable/CalcSubTable";
import ChoiceRow from "./ChoiceRow/ChoiceRow";
import LanguageMid from "./LanguageMid/LanguageMid";
import LanguageBottom from "./LanguageBottom/LanguageBottom";
const Language = ({langData, secondLangNotShow}) => {
    return (
        <CalcSubTable>
            <ChoiceRow ChoiceData={langData.langTopData} rowSpan={4}/>
            {
                langData.langTopData.selected && <LanguageMid testData={langData.testData}/>
            }
            {
                (langData?.langTopData?.selected && !secondLangNotShow) && <LanguageBottom otherLangData={langData.otherLangData}/>
            }
            {
                langData?.otherLangData?.otherLangChoiceSelected === "yes" && <LanguageMid testData={langData.otherLangTestData}/>
            }

        </CalcSubTable>
    )
}
export default Language