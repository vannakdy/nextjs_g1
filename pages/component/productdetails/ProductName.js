import  styles  from"./ProductName.module.css"
import {config} from "../../helper"
import { Row,Col } from "antd"
const ProductName = ({
    colorId,
    productDetail,
    productImageColor,
    onClickColorImage
}) => {

    return (
        <div>
            <div className={styles.txtProductName}>{productDetail.product_name}</div>
            <div className={styles.txtModel}>Model : {productDetail.model}</div>
            <div className={styles.textPrice}>{productDetail.full_price}</div>
            
            <div className={styles.txtFeature}>{productDetail.product_feature}</div>

            <div className={styles.textAvailableColor}>{productDetail.available_colors}</div>
            <Row gutter={10} className={styles.containImageColor}>
                {
                    productImageColor.map((item,index)=>{
                        return (
                            <Col onClick={()=>onClickColorImage(item)} className={{}} key={index}>
                                <img
                                    className={item.color_id == colorId ? styles.imageColorActive : styles.imageColor}
                                    src={config.imagePath + item.color_image}
                                    width={100}
                                />
                                <div style={{textAlign:"center"}}>{item.color_name}</div>
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    )
}

export default ProductName;