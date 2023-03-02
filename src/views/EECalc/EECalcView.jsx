import Container from "../../utility/Container/Container";
import EECalcStyled from "./EECalc.styled";
import CalcTable from "../../components/CalcTable/CalcTable";
import eePartAData from "../../data/eeCalc/eePartAData";

const EECalcView = () => {
    return(
        <EECalcStyled>
            <Container>
                <div className="eeCalcPage">
                    <CalcTable data={eePartAData} secScore={100}/>
                </div>
            </Container>
        </EECalcStyled>
    )
}
export default EECalcView