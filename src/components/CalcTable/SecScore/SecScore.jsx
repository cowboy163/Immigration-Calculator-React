import CalcExtraRow from "../../../utility/CalcExtraRow/CalcExtraRow";
import SecScoreStyled from "./SecScore.styled";


const SecScore = ({part, secScore}) => {
    return(
        <CalcExtraRow>
           <SecScoreStyled>
               {part}部分得分: {secScore}
           </SecScoreStyled>
        </CalcExtraRow>
    )
}
export default SecScore