/*
 * type placeholder: string
 */
const Input = ({placeholder, onChange, value}) => {
    return (
        <input type="text"
               placeholder={placeholder}
               onChange={onChange}
               value={value}
        />
    )
}
export default Input