import CalcSubTableColStyled from "./CalcSubTableCol.styled";

const CalcSubTableCol = ({children}) => {
    return(
        <CalcSubTableColStyled className="calcSubTableCol">
            {children}
        </CalcSubTableColStyled>
    )
}
export default CalcSubTableCol