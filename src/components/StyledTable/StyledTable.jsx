import STable from "./StyledTable.styled";

const StyledTable = ({FSWData}) => {
    const {header, body} = FSWData
    return(
        <STable>
            <tr>
                <th colSpan={3}>{header}</th>
            </tr>
            {
                body && body.map((item, index) =>
                    <tr>
                        <td>
                            {item?.title}
                        </td>
                        <td>
                            {item.content()}
                        </td>
                        <td>
                            xxx
                        </td>
                    </tr>
                )
            }
        </STable>
    )
}
export default StyledTable