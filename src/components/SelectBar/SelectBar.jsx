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

const SelectBar = ({content}) => {

    const handleChange = evt => {
        console.log('Label', evt.target.selectedOptions[0].label)
        console.log(evt.target.value)
    }

    return(
        <select name="" id="" onChange={evt => {handleChange(evt)}}>
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