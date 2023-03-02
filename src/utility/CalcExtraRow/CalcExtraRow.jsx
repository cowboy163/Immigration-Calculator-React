import CalcExtraRowStyled from "./CalcExtraRow.styled";

const CalcExtraRow = ({children, bgColor}) => {
    return(
        <CalcExtraRowStyled>
            <tbody>
            <tr>
                <td className="extraLine">
                    {
                        children
                    }
                </td>
            </tr>
            </tbody>
        </CalcExtraRowStyled>
    )
}
export default CalcExtraRow