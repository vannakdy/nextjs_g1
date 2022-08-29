
import { useState } from "react";
import LayouteOne from "../component/layout/LayouteOne";
import { fetchData,config } from "../helper";
import {useEffect} from "react";
import { Col,Row,Pagination } from "antd";
import ProductImage from "../component/product/ProductImage";
import ImageSlider from "../component/productdetails/ImageSlider";
import ProductName from "../component/productdetails/ProductName";
const Details = () => {

  const [productDetail, setProductDetails] = useState([]);
  const [productOptionColor, setProductOptionColor] = useState([]);
  const [productImageColor, setProductImageColor] = useState([]);
  const [colorId,setColorId] = useState(0)

  const [imageSlider,setImageSlider] = useState([])
  
  
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
        var imageSlider = res.product_option_color.filter((item,index)=>item.color_id == product_detail.color_id )
        setImageSlider(imageSlider)
      }
    })
  }

  const onClickColorImage = (paramItem) =>{
    var imageSlide = productOptionColor.filter((item,index)=>item.color_id == paramItem.color_id )
    setImageSlider(imageSlide)
    setColorId(paramItem.color_id)
  }

  return (
    <LayouteOne>
      <Row gutter={[10,20]} style={{padding:40,marginTop:30}}>
        <Col sm={24} md={8} lg={8}>
          <ImageSlider 
            data={imageSlider}
          />
        </Col>
        <Col style={{paddingLeft:30}} sm={24} md={16} lg={16}>
          <ProductName
            colorId={colorId}
            productDetail={productDetail}
            productImageColor={productImageColor}
            onClickColorImage={onClickColorImage}
          />
        </Col>
      </Row>
      <Pagination />
    </LayouteOne>
  );
};
export default Details;
