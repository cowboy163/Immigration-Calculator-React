import AgeView from "../../views/FSWCalc/Age/AgeView";
import EducationView from "../../views/FSWCalc/Education/EducationView";
import LanguageView from "../../views/FSWCalc/Language/LanguageView";
import ExperienceView from "../../views/FSWCalc/Experience/ExperienceView";
import InvitationView from "../../views/FSWCalc/Invitation/InvitationView";
import AdaptionView from "../../views/FSWCalc/Adaption/AdaptionView";

const FSWContent = [
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
    {
        title: "工作邀请",
        content: (lineIndex) => <InvitationView lineIndex={lineIndex}/>,
    },
    {
        title: "适应性",
        content: (lineIndex) => <AdaptionView lineIndex={lineIndex}/>,
    },

]

const FSWStr = 'FSW (联邦技工移民) 分数计算 (最高 100 分)'

const FSWData = {
    header: FSWStr,
    body: FSWContent,
}

export {
    FSWData,
}