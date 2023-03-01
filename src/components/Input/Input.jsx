/*
 * type placeholder: string
 */
const Input = ({placeholder, onChange, value, name}) => {
    return (
        <input type="text"
               placeholder={placeholder}
               onChange={onChange}
               value={value}
               name={name}
        />
    )
}
export default Input