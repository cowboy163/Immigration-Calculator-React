// EE Part D Data

import RelativesView from "../../views/EECalc/PartD/RelativesView";
import LanguageView from "../../views/EECalc/PartD/LanguageView";
import EducationView from "../../views/EECalc/PartD/EducationView";

const header = "D. 额外加分（最高 600 分）"
const body = [
    {
        title: "兄弟姐妹",
        content: (lineIndex) => <RelativesView lineIndex={lineIndex}/>,
    },
    {
        title: "语言",
        content: (lineIndex) => <LanguageView lineIndex={lineIndex}/>,
    },
    {
        title: "加拿大教育经历",
        content: (lineIndex) => <EducationView lineIndex={lineIndex}/>,
    },
    {
        title: "雇主担保",
        content: (lineIndex) => <p>test</p>,
    },
    {
        title: "省提名",
        content: (lineIndex) => <p>test</p>,
    },
]

const eePartDData = {
    header,
    body,
    part: "D",
}

// relatives data
const relativesOptions = [
    {
        text: "无",
        value: "no",
        group: "relativesOptions",
    },
    {
        text: "有",
        value: "yes",
        group: "relativesOptions",
    },
]
const relativesData = {
    description: () => <p>您是否有加拿大永久居民（PR）或公民（Citizen）的兄弟姐妹？</p>,
    options: relativesOptions,
}

// education data
const educationOptions= [
    {
        text: "从未",
        value: "0",
        group: "educationOptionPartD",
    },
    {
        text: "1 ~ 2 年本科或专科",
        value: "1",
        group: "educationOptionPartD",
    },
    {
        text: "3 年及以上本科或专科",
        value: "2",
        group: "educationOptionPartD",
    },
    {
        text: "1 年及以上硕士或博士",
        value: "3",
        group: "educationOptionPartD",
    },

]
const educationData = {
    description: () => <p>您在加拿大接受的高等教育水平最高为？</p>,
    options: educationOptions,
}

export {
    eePartDData,
    relativesData,
    educationData,
}
