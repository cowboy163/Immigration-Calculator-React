/*
interface Item {
    text: string
    value: string
}

interface options {
    description: string
    content: Array<Item>
}
*/

const SelectBar = ({options}) => {

    const handleChange = evt => {
        console.log('Label', evt.target.selectedOptions[0].label)
        console.log(evt.target.value)
    }

    return(
        <select name="" id="" onChange={evt => {handleChange(evt)}}>
            <option value="" defaultValue hidden>
                {options.description}
            </option>
            {
                options.content?.map((item, index) =>
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