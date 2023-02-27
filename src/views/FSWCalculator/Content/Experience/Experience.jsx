import SelectBar from "../../../../components/SelectBar/SelectBar";

const options = [
    {
        text: "无相关工作经验或相关工作经验不满1年",
        value: "",
    },
    {
        text: "1年以上",
        value: "",
    },
    {
        text: "2年以上",
        value: "",
    },
    {
        text: "4年以上",
        value: "",
    },
    {
        text: "6年以上",
        value: "",
    },
]

const content = {
    description: "—— 符合 NOC TEER 0 ~ 3 类的工作经验（加拿大境内与境外合计） ——",
    options: options,

}
const Experience = () => {
    return(
        <div>
            <SelectBar content={content}/>
        </div>
    )
}
export default Experience