/*
interface options {
    text: string
    value: string
}

interface content {
    description: string
    options: Array<options>
}
*/

const SelectBar = ({content, onChange, value}) => {

    return(
        <select name="" id=""
                onChange={onChange}
                value={value}
        >
            <option value="" defaultValue hidden>
                {content?.description}
            </option>
            {
                content?.options?.map((item, index) =>
                    <option key={index}
                            value={item.value}
                    >
                        {item.text}
                    </option>
                )
            }
        </select>
    )
}
export default SelectBar