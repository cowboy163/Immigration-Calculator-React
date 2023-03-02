import RatioSelect from "../../../../utility/RatioSelect/RatioSelect";
import StyledSubTable from "../../../../utility/StyledSubTable/StyledSubTable";

const options = [
    {
        text: "无",
        value: "no",
    },
    {
        text: "有",
        value: "yes",
    },
]
const contents = [
    {
        description: () => <p>您配偶 / 伴侣的语言成绩（听力、阅读、写作、口语四项）是否都达到了 <span>CLB / NCLC</span> 4?
        </p>,
        group: "line1",
        options: options,
    },
    {
        description: () => <p>您是否在加拿大完成过 *2 年或以上* 全日制高中或高等教育的课程学习？
        </p>,
        group: "line2",
        options: options,
    },
    {
        description: () => <p>您的配偶 / 伴侣是否在加拿大完成过 *2 年或以上* 全日制高中或高等教育的课程学习？
        </p>,
        group: "line3",
        options: options,
    },
    {
        description: () => <p>您是否在加拿大进行过 *1 年或以上* 符合 <span>TEER 0 ~ 3</span> 类的工作？
        </p>,
        group: "line4",
        options: options,
    },
    {
        description: () => <p>您的配偶 / 伴侣是否在加拿大进行过*1年或以上*符合 TEER 0 ~ 3 类的工作？
        </p>,
        group: "line5",
        options: options,
    },
    {
        description: () => <p>您在加拿大是否有被安排的工作邀请？
        </p>,
        group: "line6",
        options: options,
    },
    {
        description: () => <p>您 *或* 您的配偶 / 伴侣是否有为加拿大永久居民（PR）或公民（Citizen）的亲属？
        </p>,
        details: [
            "满足条件的亲属必须居住在加拿大且已满18岁",
            "亲属可以为申请人或申请人配偶/伴侣的：父母、祖父母、子女、孙子女、兄弟姐妹、父母的兄弟姐妹、侄子（女）、外甥（女）",
        ],
        group: "line7",
        options: options,
    },
]

const Adaption = () => {
    return (
        <StyledSubTable>
            <tbody>
            {
                contents.map((item, index) =>
                    <tr key={index}>
                        <td>
                            <RatioSelect content={item}/>
                        </td>
                    </tr>
                )
            }
            </tbody>

        </StyledSubTable>
    )
}
export default Adaption