// EE Part A Data
import AgeView from "../../views/EECalc/Age/AgeView";
import EducationView from "../../views/EECalc/Education/EducationView";
import LanguageView from "../../views/EECalc/Language/LanguageView";

const header = "A. 主申请人核心分数 CORE/HUMAN CAPITAL FACTORS（最高 500 分）"
const body = [
    {
        title: "年龄",
        content: (lineIndex) => <AgeView lineIndex={lineIndex}/>,
    },
    {
        title: "学历",
        content: (lineIndex) => <EducationView lineIndex={lineIndex}/>,
    },
    {
        title: "语言",
        content: (lineIndex) => <LanguageView lineIndex={lineIndex}/>,
    },
    {
        title: "工作经验",
        content: (lineIndex) => <p>test</p>,
    },
]
const eePartAData = {
    header,
    body,
    part: "A",
    other: () => <p> other test </p>
}

export default eePartAData
