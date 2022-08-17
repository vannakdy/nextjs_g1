import React   from "react";
import { config } from "../../helper";
import styles from "./ProductImage.module.css"
const ProductImage = ({
    image,
    product_name,
    full_price,
    spacial_label,
    color_codes
}) => {

    return (
        <div style={{paddingTop:10}}>
            <div>
                <img
                    src={config.imagePath + image}
                    width={"100%"}
                />
                <div className={styles.txtSpecailLabel}>{spacial_label}</div>
            </div>
            <div className={styles.containDescription}>
                <div className={styles.txtProductName}>{product_name}</div>

                <div className={styles.rowColor}>
                    <div className={styles.txtDis}><del>USD ${full_price}</del></div>
                    <div className={styles.txtDis}>50%</div>
                    <div className={styles.txtFullPrice}>USD ${full_price}</div>
                </div>
                
                <div className={styles.rowColor}>
                    {color_codes && color_codes.map((item,index)=>{
                        return (
                            <div key={index}>
                                <div style={{backgroundColor:item}} className={styles.boxColor} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProductImage