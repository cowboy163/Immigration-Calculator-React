import Age from "../../views/FSWCalculator/Content/Age/Age";
import Education from "../../views/FSWCalculator/Content/Education/Education";
import Language from "../../views/FSWCalculator/Content/Language/Language";
import Experience from "../../views/FSWCalculator/Content/Experience/Experience";
import Invitation from "../../views/FSWCalculator/Content/Invitation/Invitation";
import Adaption from "../../views/FSWCalculator/Content/Adaption/Adaption";

const FSWContent = [
    {
        title: "年龄",
        content: () => <p> test </p>,
    },
    {
        title: "学历",
        content: () => <p> test </p>,
    },
    {
        title: "语言",
        content: () => <p> test </p>,
    },
    {
        title: "工作经验",
        content: () => <p> test </p>,
        index: 4,
    },
    {
        title: "工作邀请",
        content: () => <p> test </p>,
        index: 5,
    },
    {
        title: "适应性",
        content: () => <p> test </p>,
        index: 6,
    },

]

const FSWStr = 'FSW (联邦技工移民) 分数计算 (最高 100 分)'

const FSWData = {
    header: FSWStr,
    body: FSWContent,
    // part: "A",
    other: () => <p> other test </p>
}

export default FSWData