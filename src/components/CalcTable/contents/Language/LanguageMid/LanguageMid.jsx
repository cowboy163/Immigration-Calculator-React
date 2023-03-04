import ChoiceRow from "../ChoiceRow/ChoiceRow";
import CalcSubTableRow from "../../../../../utility/CalcSubTable/CalcSubTableRow/CalcSubTableRow";
import CalcSubTableCol from "../../../../../utility/CalcSubTable/CalcSubTableCol/CalcSubTableCol";
import Input from "../../../../../utility/Input/Input";
import TextAlignCenterStyled from "../../../../../utility/TextAlignCenter/TextAlignCenter.styled";

const LanguageMid = ({testData}) => {
    return(
        <>
            <ChoiceRow ChoiceData={testData?.testChoiceData} rowSpan={4}/>
            <CalcSubTableRow>
                {
                    testData?.testCategory.map((item, index) =>
                        <CalcSubTableCol key={index}>
                            <TextAlignCenterStyled>
                                {item}
                            </TextAlignCenterStyled>
                        </CalcSubTableCol>
                    )
                }
            </CalcSubTableRow>
            <CalcSubTableRow>
                {
                    testData?.testCategory.map((item, index) =>
                        <CalcSubTableCol key={index}>
                            <TextAlignCenterStyled>
                                <Input onChange={testData.testScore.scoreChange}
                                       value={testData.testScore.score[index]}
                                       index={index}
                                />
                            </TextAlignCenterStyled>
                        </CalcSubTableCol>
                    )
                }
            </CalcSubTableRow>
        </>
    )
}
export default LanguageMid