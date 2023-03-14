import FSWCalcStyled from "./FSWCalc.styled";
import Container from "../../utility/Container/Container";
import CalcTable from "../../components/CalcTable/CalcTable";
import {useSelector} from "react-redux";
import {FSWData} from "../../data/fswCalc/FSWData";
import {useEffect, useState} from "react";
import getSumArray from "../../js/getSumArray";

const FSWCalcView = () => {
    const score = useSelector(state => state.fswCalc.score)
    const [totalScore, setTotalScore] = useState("")
    useEffect(() => {
        if (score) {
            setTotalScore(String(getSumArray(score)))
        }
    }, [score])
    return (
        <FSWCalcStyled>
            <Container>
                <div className="fswCalcPage">
                    <CalcTable data={FSWData}
                               subScore={score}
                    />
                </div>
                <h1 className="totalScore">
                    您的FSW分数为：{totalScore}
                </h1>
            </Container>
        </FSWCalcStyled>
    )
}
export default FSWCalcView