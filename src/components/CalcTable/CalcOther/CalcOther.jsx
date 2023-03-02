import CalcExtraRow from "../../../utility/CalcExtraRow/CalcExtraRow";

const CalcOther = ({other}) => {
    return(
        <CalcExtraRow>
            {
                other()
            }
        </CalcExtraRow>
    )
}
export default CalcOther