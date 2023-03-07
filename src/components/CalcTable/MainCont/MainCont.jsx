/*
 * interface item {title: string, content: () => ReactNode,}
 * interface data {header: string, body: item}
 */

import MainContStyled from "./MainCont.styled";
import SubScore from "./SubScore";

const MainCont = ({header, body, subScore, extra}) => {
    // console.log("data check ===>", subScore)
    return (
        <MainContStyled>
            <thead>
            <tr className="styledRow">
                <th colSpan={Object.getOwnPropertyNames(body[0]).length + 1}>{header}</th>
            </tr>
            </thead>

            <tbody>
            {
                extra && <tr className="styledRow">
                    <td className="styledCol"
                        colSpan={Object.getOwnPropertyNames(body[0]).length + 1}
                    >
                        {
                            extra()
                        }
                    </td>
                </tr>
            }
            {
                body.map((item, index) =>
                    <tr key={index} className="styledRow">
                        <td className="styledCol">
                            {item.title}
                        </td>
                        <td className="styledCol">
                            {item.content(index)}
                        </td>
                        {/*{*/}
                        {/*    subScore && <td className="styledCol">*/}
                        {/*        {subScore? subScore[index]:""}*/}
                        {/*    </td>*/}
                        {/*}*/}
                        <td className="styledCol">
                            {subScore? <SubScore data={subScore[index]}/> : ""}
                        </td>


                    </tr>
                )
            }
            </tbody>
        </MainContStyled>
    )
}

export default MainCont