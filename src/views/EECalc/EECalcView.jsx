import Container from "../../utility/Container/Container";
import EECalcStyled from "./EECalc.styled";
import CalcTable from "../../components/CalcTable/CalcTable";
import {eePartAData, spouseChoiceContent} from "../../data/eeCalc/eePartAData";
import {useDispatch, useSelector} from "react-redux";
import {changeSpouseChoice} from "../../features/eeSlice/eeSlice";
import {eePartBData} from "../../data/eeCalc/eePartBData";
import {eePartCData} from "../../data/eeCalc/eePartCData";
import {eePartDData} from "../../data/eeCalc/eePartDData";
import {useEffect, useState} from "react";
import getSumArray from "../../js/getSumArray";

const EECalcView = () => {
    const dispatch = useDispatch()

    // CalcOther data
    const spouseChoice = useSelector(state => state?.eeCalc?.spouseChoice)
    const spouseChoiceChange = evt => {
        const val = evt.target.value
        dispatch(changeSpouseChoice(val))
    }
    const spouseChoiceData = {
        content: spouseChoiceContent,
        selected: spouseChoice,
        onChange: spouseChoiceChange,
    }

    // subScore
    const subScoreA = useSelector(state => state.eeCalc.subScoreA)
    const subScoreB = useSelector(state => state.eeCalcPartB.subScoreB)
    const subScoreC = useSelector(state => state.eeCalcPartC.subScoreC)
    const subScoreD = useSelector(state => state.eeCalcPartD.subScoreD)

    // part A section score
    const [secScoreA, setSecScoreA] = useState("")
    useEffect(() => {
        setSecScoreA(getSumArray(subScoreA))
    }, [subScoreA])

    // part B section score
    const [secScoreB, setSecScoreB] = useState("")
    useEffect(() => {
        setSecScoreB(getSumArray(subScoreB))
    }, [subScoreB])
    return (
        <EECalcStyled>
            <Container>
                {/*Part A*/}
                <div className="eeCalcPage">
                    <CalcTable data={eePartAData}
                               secScore={secScoreA}
                               subScore={subScoreA}
                               other={spouseChoiceData}
                    />
                    {/*Part B*/}
                    {
                        spouseChoice === "yes" && <CalcTable data={eePartBData}
                                                             subScore={subScoreB}
                                                             secScore={secScoreB}
                        />
                    }
                </div>
                {/*Part C*/}
                <div className="eeCalcPage">
                    <CalcTable data={eePartCData}
                               secScore={100}
                               subScore={subScoreC}
                    />
                </div>
                {/*Part D*/}
                <div className="eeCalcPage">
                    <CalcTable data={eePartDData}
                               secScore={100}
                               subScore={subScoreD}
                    />
                </div>
            </Container>
        </EECalcStyled>
    )
}
export default EECalcView