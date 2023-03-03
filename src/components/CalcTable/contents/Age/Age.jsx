/*
 * @param {string} inputValue - input value
 * @param {callback} onChange
 * @param {number} lineIndex - the number of rows, start from 0
 */

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