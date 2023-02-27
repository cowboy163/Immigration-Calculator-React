import RatioSelect from "../../../../components/RatioSelect/RatioSelect";
import StyledSubTable from "../../../../components/StyledSubTable/StyledSubTable";

const options = ["无", "有"]
const contents = [
    {
        description: () => <p>您配偶 / 伴侣的语言成绩（听力、阅读、写作、口语四项）是否都达到了 <span>CLB / NCLC</span> 4?
        </p>,
        group: "line1",
        options: options,
    },
    {
        description: () => <p>您配偶 / 伴侣的语言成绩（听力、阅读、写作、口语四项）是否都达到了 <span>CLB / NCLC</span> 4?
        </p>,
        group: "line1",
        options: options,
    },
    {
        description: () => <p>您配偶 / 伴侣的语言成绩（听力、阅读、写作、口语四项）是否都达到了 <span>CLB / NCLC</span> 4?
        </p>,
        group: "line1",
        options: options,
    },
    {
        description: () => <p>您配偶 / 伴侣的语言成绩（听力、阅读、写作、口语四项）是否都达到了 <span>CLB / NCLC</span> 4?
        </p>,
        group: "line1",
        options: options,
    },
    {
        description: () => <p>您配偶 / 伴侣的语言成绩（听力、阅读、写作、口语四项）是否都达到了 <span>CLB / NCLC</span> 4?
        </p>,
        group: "line1",
        options: options,
    },
    {
        description: () => <p>您配偶 / 伴侣的语言成绩（听力、阅读、写作、口语四项）是否都达到了 <span>CLB / NCLC</span> 4?
        </p>,
        group: "line1",
        options: options,
    },
    {
        description: () => <p>您配偶 / 伴侣的语言成绩（听力、阅读、写作、口语四项）是否都达到了 <span>CLB / NCLC</span> 4?
        </p>,
        group: "line1",
        options: options,
    },
    {
        description: () => <p>您配偶 / 伴侣的语言成绩（听力、阅读、写作、口语四项）是否都达到了 <span>CLB / NCLC</span> 4?
        </p>,
        group: "line1",
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