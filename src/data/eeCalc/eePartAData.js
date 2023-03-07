// EE Part A Data
import AgeView from "../../views/EECalc/PartA/Age/AgeView";
import EducationView from "../../views/EECalc/PartA/Education/EducationView";
import LanguageView from "../../views/EECalc/PartA/Language/LanguageView";
import ExperienceView from "../../views/EECalc/PartA/Experience/ExperienceView";

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
        content: (lineIndex) => <ExperienceView lineIndex={lineIndex}/>,
    },
]

// other language data
const spouseChoice = [
    {
        text: "是",
        value: "yes",
        group: "otherSelection",
    },
    {
        text: "否",
        value: "no",
        group: "otherSelection",
    },
]
const spouseChoiceContent = {
    description: () => <p>您是否有配偶 / 伴侣， 且您的配偶 / 伴侣不是加拿大永久居民（PR）或公民（Citizen）</p>,
    options: spouseChoice,
}

const eePartAData = {
    header,
    body,
    part: "A",
}

export {
    eePartAData,
    spouseChoiceContent,
}
