import  styles  from"./ProductName.module.css"
import {config} from "../../helper"
import { Row,Col,Select } from "antd"
const {Option} = Select
const ProductName = ({
    colorId,
    productDetail,
    productImageColor,
    onClickColorImage,
    productSize
}) => {
    var size = productSize.filter((item,index)=> item.color_id == colorId)
    return (
        <div>
            <div className={styles.txtProductName}>{productDetail.product_name}</div>
            <div>
                {
                   ( productDetail.discount != null && productDetail.discount != 0 ) ? 
                    <div className={styles.container_price}>
                        <div className={styles.textFullPrice}>$ USD {productDetail.full_price}</div>
                        <div className={styles.textDiscount}>{productDetail.discount}%</div>
                        <div className={styles.textPrice}>$ USD {productDetail.discount_price}</div>
                    </div>
                    :
                    <div className={styles.textPrice}>$ USD {productDetail.full_price}</div>
                }
            </div>

            <div className={styles.txtModel}>Model : {productDetail.model}</div>
            
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
            <div className={styles.size_container}>
                <Select
                    showSearch
                    style={{
                        width: 300,
                    }}
                    placeholder="Select Size"
                    optionFilterProp="children"
                    filterOption={(input, option) => option.children.includes(input)}
                    filterSort={(optionA, optionB) =>
                        optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                    }
                >
                    {size && size.map((item,index)=>{
                        return(
                            <Option key={index} value={item.option_value_id}>{item.size_name}</Option>
                        )
                    })}
                </Select>
            </div>

            <div className={styles.btn_add_cart}>
                <button>ADD TO CART</button>
            </div>

        </div>
    )
}

export default ProductName;