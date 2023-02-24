import STable from "./StyledTable.styled";

const StyledTable = ({FSWData}) => {
    const {header, body} = FSWData
    return (
        <STable>
            <thead>
                <tr>
                    <th colSpan={3}>{header}</th>
                </tr>
            </thead>

            <tbody>

            {
                body && body.map((item, index) =>
                    <tr key={index}>
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
            </tbody>

        </STable>
    )
}
export default StyledTable