
import styles from "../../../styles/component/Button.module.css"

const Button = ({title,onClick}) => {
    return (
        <button 
            className={styles.btn_black}
            onClick={onClick}
        >
            {title}
        </button>
    )
}

export default Button;

// const Button = (props) => {
//     return (
//         <button>
//             {props.title}
//         </button>
//     )
// }

// const Button = (props) => {
//     const {title } = props;
//     return (
//         <button>
//             {title}
//         </button>
//     )
// }

