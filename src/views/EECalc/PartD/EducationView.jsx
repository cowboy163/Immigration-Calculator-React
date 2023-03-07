import CalcSubTable from "../../../utility/CalcSubTable/CalcSubTable";
import ChoiceRow from "../../../components/CalcTable/contents/Language/ChoiceRow/ChoiceRow";
import {educationData} from "../../../data/eeCalc/eePartDData";
import TextAlignCenterStyled from "../../../utility/TextAlignCenter/TextAlignCenter.styled";

const EducationView = ({lineIndex}) => {
    const selected = "0"
    const onChange = () => {
        console.log("test")
    }
    const choiceData = {
        content: educationData,
        onChange,
        selected,
    }
    return(
        <CalcSubTable>
                <ChoiceRow ChoiceData={choiceData}/>
        </CalcSubTable>
    )
}
export default EducationView