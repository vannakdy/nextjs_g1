
import { useState } from "react";
import LayouteOne from "../component/layout/LayouteOne";
import { fetchData,config } from "../helper";
import {useEffect} from "react";
import { Col,Row,Pagination } from "antd";
import ProductImage from "../component/product/ProductImage";
import Link from "next/link";
import {useRouter} from "next/router"
const Listproduct = () => {
  const router = useRouter()
  const [list,setList] = useState([]);
  const [page,setPage] = useState(1);
  const [totalRecord,setTotalRecord] = useState(0);
  
  useEffect(()=>{
   getHomeInfo();
  },[])

  const getHomeInfo = () => {
    fetchData("api/ListProduct/getProductList?page=2&category_id=157",{},"POST").then(res=>{
      if(!res.error){
        setList(res.list)
        if(page == 1){
            setTotalRecord(res.total_record)
        }
       
      }
    })
  }

  return (
    <LayouteOne>
      <Row gutter={[10,20]} style={{padding:40}}>
        {list && list.map((item,index)=>{
            return (
                <Col  
                onClick={()=>{
                  router.push("/product/details")
                }}   
                xs={12} sm={12} md={6} lg={6}  key={index}>
                      <ProductImage
                          {...item}
                      />
                </Col>
            )
        })}
      </Row>
      <Pagination  total={totalRecord/30} />
    </LayouteOne>
  );
};
export default Listproduct;
