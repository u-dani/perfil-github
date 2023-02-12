
const Input = ({ id, type, text, placeholder, handleChange }) => {

    return (
        <label htmlFor={id}>
            <span>{text}</span>
            <input type={type} id={id} placeholder={placeholder} onChange={handleChange}/>
        </label>
    )
}

export default Input