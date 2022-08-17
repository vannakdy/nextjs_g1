import Link from "next/link";
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
                <Link href={"/"}><div className={styles.txtMainBrand}>Stora</div></Link>
                <div>
                    <Link href={"/"}>Home</Link>
                    <Link href={"/about"}>About us</Link>
                    <Link href={"/register"}>Register</Link>
                    <Link href={"/login"}>Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;