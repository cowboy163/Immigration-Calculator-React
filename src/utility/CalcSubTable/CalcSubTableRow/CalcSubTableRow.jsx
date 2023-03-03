import CalcSubTableRowStyled from "./CalcSubTableRow.styled";

const CalcSubTableRow = ({children}) => {
    return(
        <CalcSubTableRowStyled className="calcSubTableRow">
            {
                children
            }
        </CalcSubTableRowStyled>
    )
}
export default CalcSubTableRow