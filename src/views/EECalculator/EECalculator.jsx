import StyledDiv from "./EECalculator.styled";
import StyledTable from "../../components/StyledTable/StyledTable";
import FSWData from "../../data/FSWData";

const EECalculator = () => {
    return(
        <StyledDiv>
            <StyledTable FSWData={FSWData}/>
        </StyledDiv>
    )
}
export default EECalculator