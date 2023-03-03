import SelectBar from "../../../../utility/SelectBar/SelectBar";

const Education = ({content, onChange, value}) => {
    return(
        <SelectBar content={content}
                   onChange={onChange}
                   value={value}
        />
    )
}
export default Education