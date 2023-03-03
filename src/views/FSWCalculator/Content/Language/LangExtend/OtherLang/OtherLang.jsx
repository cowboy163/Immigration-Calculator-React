// import StyledSubTable1 from "../../../../../../utility/StyledSubTable/StyledSubTable";
import RatioSelect from "../../../../../../utility/RatioSelect/RatioSelect";
import {useState} from "react";
const options = [
    {
        text: "是",
        value: "yes",
    },
    {
        text: "否",
        value: "no",
    },
]
const content = {
    group: "otherLang",
    options: options,
}
const OtherLang = () => {
    const [select, setSelect] = useState("")
    const handleChange = val => {
        setSelect(val)
    }
    return(
        // <StyledSubTable1 bgColor="transparent"
        //                  borderFix={true}
        // >
            <tbody>
                <tr>
                    <td>您是否有另外一门语言的成绩</td>
                </tr>
                <tr>
                    <td>
                        <RatioSelect content={content}
                                     onChange={evt => {handleChange(evt.target.value)}}
                                     selected={select}
                        />
                    </td>
                </tr>
            </tbody>
        // </StyledSubTable1>
    )
}
export default OtherLang