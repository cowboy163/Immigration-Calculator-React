import FSWCalcStyled from "./FSWCalc.styled";
import Container from "../../utility/Container/Container";
import FSWCalcTable from "./FSWCalcTable/FSWCalcTable";

const FSWCalcView = () => {
    return(
        <FSWCalcStyled>
            <Container>
                <div className="fswCalcPage">
                    <FSWCalcTable/>
                </div>
            </Container>
        </FSWCalcStyled>
    )
}
export default FSWCalcView