/*
 * interface item {title: string, content: () => ReactNode,}
 * interface data {header: string, body: item}
 */

import MainContStyled from "./MainCont.styled";

const MainCont= ({header, body, subScore}) => {
    return(
        <MainContStyled>
            <thead>
            <tr className="styledRow">
                <th colSpan={Object.getOwnPropertyNames(body[0]).length + 1}>{header}</th>
            </tr>
            </thead>

            <tbody>
            {
                body.map((item, index) =>
                    <tr key={index} className="styledRow">
                        <td className="styledCol">
                            {item.title}
                        </td>
                        <td className="styledCol">
                            {item.content(index)}
                        </td>
                        <td className="styledCol">
                            {subScore? subScore[index]:""}
                        </td>
                    </tr>
                )
            }
            </tbody>
        </MainContStyled>
    )
}

export default MainCont