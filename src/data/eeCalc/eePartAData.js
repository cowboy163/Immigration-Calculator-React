// EE Part A Data
import AgeView from "../../views/EECalc/Age/AgeView";

const titleStr = "A. 主申请人核心分数 CORE/HUMAN CAPITAL FACTORS（最高 500 分）"
const contents = [
    {
        title: "年龄",
        content: () => <AgeView/>,
    },
    {
        title: "学历",
        content: () => <p>test</p>,
    },
    {
        title: "语言",
        content: () => <p>test</p>,
    },
    {
        title: "工作经验",
        content: () => <p>test</p>,
    },
]
const eePartAData = {
    header: titleStr,
    body: contents,
    part: "A",
    other: () => <p> other test </p>
}

export default eePartAData
