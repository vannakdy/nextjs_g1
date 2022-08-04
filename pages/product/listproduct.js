
import { useState } from "react";
import LayouteOne from "../component/layout/LayouteOne";
import { fetchData,config } from "../helper";
import {useEffect} from "react";
import { Col,Row,Pagination } from "antd";
const Listproduct = () => {

  const [list,setList] = useState([]);
  const [page,setPage] = useState(1);
  const [totalRecord,setTotalRecord] = useState(0);
  
  useEffect(()=>{
   getHomeInfo();
  },[])

  const getHomeInfo = () => {
    fetchData("api/ListProduct/getProductList?page=1&category_id=157",{},"POST").then(res=>{
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
      <Row gutter={[10,20]}>
        {list && list.map((item,index)=>{
            return (
                <Col xs={12} sm={12} md={6} lg={6}  key={index}>
                    <img
                        src={config.imagePath + item.image}
                        width={"100%"}
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
