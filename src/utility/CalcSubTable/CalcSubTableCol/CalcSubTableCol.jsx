import CalcSubTableColStyled from "./CalcSubTableCol.styled";

const CalcSubTableCol = ({children, rowSpan}) => {
    return(
        <CalcSubTableColStyled className="calcSubTableCol"
                               colSpan={rowSpan? rowSpan: 1}
        >
            {children}
        </CalcSubTableColStyled>
    )
}
export default CalcSubTableCol