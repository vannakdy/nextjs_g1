import  styles  from"./ProductName.module.css"
import {config} from "../../helper"
import { Row,Col,Select } from "antd";
import ProductImage from "../product/ProductImage";
const {Option} = Select
const ProductRecommend = ({
    data,
    title
}) => {
    return (
        <div className={styles.containRecommen}>
            <div className={styles.txtRecommend}>{title}</div>
            <Row gutter={10}>
                {data && data.map((item,index)=>{
                    return (
                        <Col sm={12} md={6} lg={6} key={index}>
                            <ProductImage 
                                {...item}
                            />
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}

export default ProductRecommend;