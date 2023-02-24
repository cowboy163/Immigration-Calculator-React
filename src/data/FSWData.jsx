import Age from "../views/FSWCalculator/Content/Age/Age";
import Education from "../views/FSWCalculator/Content/Education/Education";
import Language from "../views/FSWCalculator/Content/Language/Language";
import Experience from "../views/FSWCalculator/Content/Experience/Experience";

const FSWContent = [
    {
        title: "年龄",
        content: () => <Age/>,
    },
    {
        title: "学历",
        content: () => <Education/>,
    },
    {
        title: "语言",
        content: () => <Language/>,
    },
    {
        title: "工作经验",
        content: () => <Experience/>,
    },
    {
        title: "工作邀请",
        content: () => <p>18</p>,
    },
    {
        title: "适应性",
        content: () => <p>18</p>,
    },

]

const FSWStr = 'FSW (联邦技工移民) 分数计算 (最高 100 分)'

const FSWData = {
    header: FSWStr,
    body: FSWContent,
}

export default FSWData