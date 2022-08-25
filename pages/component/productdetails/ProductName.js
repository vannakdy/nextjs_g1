import  styles  from"./ProductName.module.css"
import {config} from "../../helper"
import { Row,Col } from "antd"
const ProductName = ({
    productDetail,
    productImageColor
}) => {

    return (
        <div>
            <div className={styles.txtProductName}>{productDetail.product_name}</div>
            <div className={styles.txtModel}>Model : {productDetail.model}</div>
            <div className={styles.txtFeature}>{productDetail.product_feature}</div>

            <div className={styles.textAvailableColor}>{productDetail.available_colors}</div>
            <Row gutter={10} className={styles.containImageColor}>
                {
                    productImageColor.map((item,index)=>{
                        return (
                            <Col className={styles.imageColor} key={index}>
                                <img
                                    src={config.imagePath + item.color_image}
                                    width={100}
                                />
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    )
}

export default ProductName;