
import styles from "../../../styles/layout/LayouteOne.module.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const LayouteOne = ({children}) => {

    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}

export default LayouteOne;