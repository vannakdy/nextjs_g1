
import { useState } from "react";
import LayouteOne from "../component/layout/LayouteOne";
import { fetchData,config } from "../helper";
import {useEffect} from "react";
import { Col,Row,Pagination } from "antd";
import ProductImage from "../component/product/ProductImage";
import ImageSlider from "../component/productdetails/ImageSlider";
const Details = () => {

  const [productDetail, setProductDetails] = useState([]);
  const [productOptionColor, setProductOptionColor] = useState([]);
  const [productImageColor, setProductImageColor] = useState([]);
  const [colorId,setColorId] = useState(0)
  
  
  useEffect(()=>{
   getProductDetails();
  },[])

//   dynamic_content: []
//   event_id: 1661258945.946
//   meta_data: {meta_title: 'Straight Jeans With Cuffed Hem | TEN11', meta_description: 'Mid-rise jeans with five pockets. Cuffed hems. Metal button-up front. 100% Cotton\r\n', meta_keyword: ''}
//   product_color_size_stock: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
//   product_detail: [{…}]
//   product_image_color: (2) [{…}, {…}]
//   product_option_color: (9) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
//   product_recommended

  const getProductDetails = () => {
    fetchData("api/ProductDetail/getProductDetail?seo_url=ten11-lady-denim-jeans-964398321&server=0",{},"POST").then(res=>{
      if(!res.error){
        var product_detail =  res.product_detail[0] && res.product_detail[0];
        setProductDetails(product_detail)
        setColorId(product_detail.color_id)
        setProductOptionColor(res.product_option_color)
        setProductImageColor(res.product_image_color)
      }
    })
  }

  return (
    <LayouteOne>
      <Row gutter={[10,20]} style={{padding:40}}>

        <ImageSlider 
            data={productOptionColor}
        />
        {/* {list && list.map((item,index)=>{
            return (
                <Col xs={12} sm={12} md={6} lg={6}  key={index}>
                   <ProductImage
                      {...item}
                   />
                </Col>
            )
        })} */}
      </Row>
      <Pagination />
    </LayouteOne>
  );
};
export default Details;
