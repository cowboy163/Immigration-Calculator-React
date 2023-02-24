import StyledDiv from "./FSWCalculator.styled";
import StyledTable from "../../components/StyledTable/StyledTable";
import FSWData from "../../data/FSWData";

const FSWCalculator = () => {
    return(
        <StyledDiv>
            <StyledTable FSWData={FSWData}/>
        </StyledDiv>
    )
}
export default FSWCalculator