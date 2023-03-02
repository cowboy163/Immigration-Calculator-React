import Input from "../../../../utility/Input/Input";

const Age = ({inputValue, onChange}) => {
    return (
        <Input placeholder="年龄"
               value={inputValue}
               onChange={onChange}
        />
    )
}
export default Age