// EE Part B Data
import EducationView from "../../views/EECalc/PartB/Education/EducationView";
import LanguageView from "../../views/EECalc/PartB/Language/LanguageView";
import ExperienceView from "../../views/EECalc/PartB/Experience/ExperienceView";

const header = "A. 配偶 / 伴侣分数 SPOUSE OR COMMON-LAW PARTNER FACTORS（最高 40 分）"
const body = [
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
        content: (lineIndex) => <ExperienceView lineIndex={lineIndex}/>,
    },
]

const eePartBData = {
    header,
    body,
    part: "B",
}

export {
    eePartBData,
}
