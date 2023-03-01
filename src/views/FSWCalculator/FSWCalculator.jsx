import StyledTable from "../../components/StyledTable/StyledTable";
import FSWData from "../../data/FSWData";
import {useSelector} from "react-redux";

const {header, body} = FSWData
const FSWCalculator = () => {
    const score = useSelector(state => state?.fswCalc?.score)
    return (
        <div>
            <StyledTable>
                <thead>
                <tr className="styledRow">
                    <th colSpan={3}>{header}</th>
                </tr>
                </thead>

                <tbody>
                {
                    body && body.map((item, index) =>
                        <tr key={index} className="styledRow">
                            <td className="styledCol">
                                {item?.title}
                            </td>
                            <td className="styledCol">
                                {item.content(index)}
                            </td>
                            <td className="styledCol">
                                {
                                    score && score[index]
                                }
                                xxx
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </StyledTable>
            <h2>
                您的FSW分数为: xxx
            </h2>
        </div>
    )
}
export default FSWCalculator