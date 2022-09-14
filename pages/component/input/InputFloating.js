import InputFloat from 'react-floating-input'
import styles from "./InputFloating.module.css"

const InputFloating = ({
    type="text",
    value,
    placeholder = "",
    onChange
}) => {
    return (
        <div
            className={styles.contain_input}
        >
            <InputFloat
                type={type}
                value={value} 
                placeholder={placeholder}
                onChange={onChange}
            />
            {/* <input
                className={styles.text_input}
                value={value} 
                type={type}
                placeholder={placeholder}
                onChange={onChange}
            /> */}
        </div>
    )
}

export default InputFloating;