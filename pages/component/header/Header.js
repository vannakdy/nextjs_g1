import styles from "../../../styles/component/Header.module.css"
const Header = () => {

    return (
        <div>
            <div className={styles.container_top}>
                <div>KH</div>
            </div>
            <div 
                className={styles.container}
            >
                <div>Stora</div>
            </div>
        </div>
    )
}

export default Header;