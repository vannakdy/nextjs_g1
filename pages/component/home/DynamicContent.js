import { Carousel, Row,Col } from 'antd';
import React from 'react';
import {config} from "../../helper";
import {useRouter} from "next/router";
import ProductImage from '../product/ProductImage';

const DynamicContent = ({home}) => {
    const router = useRouter();

    const renderItem = () =>{
        var Content = null;
        home && home.map((item,index)=>{
            var element = item.element;
            if(element == "hos_slideshow"){
                item.sections.map((item1,index)=>{
                    Content = 
                        <div key={index}>
                            {Content}
                            <img
                                src={config.imagePath + item1.image}
                                style={{width:"100%"}}
                            />
                        </div>
                })
            }
            if(element == "ave_category_wall"){
                Content =  
                <>
                    {Content}
                    <div style={{justifyContent:'center',alignItems:"center"}}>
                        <Row justify="center" gutter={5} style={{margin:"15px 0"}}>
                            {item.sections && item.sections.data.map((item1,index1)=>{
                                    return (
                                    <Col  
                                        onClick={()=>{
                                            router.push("/product/listproduct")
                                        }}
                                        style={{cursor:"pointer"}}
                                        xs={12} sm={12} md={9}  lg={9}
                                    >

                                        <img
                                            src={config.imagePath + item1.image}
                                            width={"100%"}
                                        />
                                        <div style={{fontSize:22,textAlign:'center',marginTop:10}}>{item1.title["1"]}</div>
                                    </Col>
                                    )
                                
                            })}
                        </Row>
                    </div>
                </>
            }
            if(element == "product_feature"){
                Content =  
                <>
                    {Content}
                        <h1 style={{textAlign:"center"}}>{item.title}</h1>
                        <Row justify="center"  gutter={5} style={{margin:"15px 0"}}>
                            {item.product && item.product.map((item1,index1)=>{
                                    return (
                                    <Col  
                                        onClick={()=>{
                                            router.push("/product/details")
                                        }}
                                        xs={12} sm={12} md={6}  lg={6}
                                    >
                                        <ProductImage
                                            // image={item1.image}
                                            // product_name = {item1.product_name}
                                            // full_price = {item1.full_price}
                                            // spacial_label = {item1.spacial_label}
                                            // color_codes = {item1.color_codes}
                                            {...item1}
                                        />
                                        {/* <img
                                            src={config.imagePath + item1.image}
                                            width={"100%"}
                                        />
                                        <div style={{margin:10}}>
                                            <div>{item1.product_name}</div>
                                            <div>{item1.full_price}</div>
                                            <div>{item1.spacial_label}</div>
                                        </div> */}
                                    </Col>
                                    )
                                
                            })}
                        </Row>
                </>
            }
        })
        return Content
    }
    
    return (
        <div>
            {renderItem()}
        </div>
    )
}

export default DynamicContent;