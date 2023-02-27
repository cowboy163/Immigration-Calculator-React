import RatioSelect from "../../../../components/RatioSelect/RatioSelect";

const options = ["无", "有"]
const content = {
    description: () => <p>"您是否已经有 *来自加拿大境内雇主* 且 *超过 1 年* 的全职工作邀请？"</p>,
    group: "invitation",
    options: options,
}

const Invitation = () => {
    return(
        <RatioSelect content={content}/>
    )
}
export default Invitation