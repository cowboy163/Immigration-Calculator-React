import CalcSubTableStyled from "./CalcSubTable.styled";

const CalcSubTable = ({children}) => {
    return(
        <CalcSubTableStyled>
            <tbody>
            {
                children
            }
            </tbody>
        </CalcSubTableStyled>
    )
}
export default CalcSubTable