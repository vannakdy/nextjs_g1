
import styles from "../../../styles/layout/LayouteOne.module.css";
import Header from "../header/Header";
import Header1 from "../header/Header1";
import Footer from "../footer/Footer";

const LayouteOne = ({children,is_footer=true}) => {

    return (
        <div>
            <Header1/>
            <div style={{marginTop:80}}>
                {children}
            </div>
            {is_footer && <Footer/>}
        </div>
    )
}

export default LayouteOne;