import Container from "../../utility/Container/Container";
import EECalcStyled from "./EECalc.styled";
import CalcTable from "../../components/CalcTable/CalcTable";
import eePartAData from "../../data/eeCalc/eePartAData";
import {useSelector} from "react-redux";

const EECalcView = () => {
    const subScore = useSelector(state => state?.eeCalc?.subScore)
    return(
        <EECalcStyled>
            <Container>
                <div className="eeCalcPage">
                    <CalcTable data={eePartAData}
                               secScore={100}
                               subScore={subScore}
                    />
                </div>
            </Container>
        </EECalcStyled>
    )
}
export default EECalcView