import RatioSelect from "../../../../components/RatioSelect/RatioSelect";

const options = ["英语", "法语"]

const content = {
    group: "language",
    options: options,
}

const Language = () => {
    return(
        <RatioSelect content={content}/>
    )
}
export default Language