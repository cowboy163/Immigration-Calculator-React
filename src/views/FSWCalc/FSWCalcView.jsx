import FSWCalcStyled from "./FSWCalc.styled";
import Container from "../../utility/Container/Container";
import CalcTable from "../../components/CalcTable/CalcTable";
import {useSelector} from "react-redux";
import {FSWData} from "../../data/fswCalc/FSWData";

const FSWCalcView = () => {
    const score = useSelector(state => state.fswCalc.score)
    return(
        <FSWCalcStyled>
            <Container>
                <div className="fswCalcPage">
                    <CalcTable data={FSWData}
                               subScore={score}
                    />
                </div>
            </Container>
        </FSWCalcStyled>
    )
}
export default FSWCalcView