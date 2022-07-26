import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Index.module.css";
import Button from "./component/button/Button";
import { useState } from "react";
import LayouteOne from "./component/layout/LayouteOne";
import HomeSlider from "./component/home/HomeSlider";
import product from "../pages/data/product"
import {Row,Col} from 'antd'
import ProductImage from "./component/product/ProductImage";
import ProductDes from "./component/product/ProductDes";
import { fetchData } from "./helper";
import {useEffect} from "react";
import DynamicContent from "./component/home/DynamicContent";
const Home = () => {

  const [value1, setValue1] = useState(0);
  const [listProdcut, setListProduct] = useState(product);
  const [home,setHome] = useState([]);

  var value2 = 0;
  value2 = 100;
  const PI = 3.14;

  useEffect(()=>{
   getHomeInfo();
  },[])

  const getHomeInfo = () => {
    fetchData("api/Homepage/getHomePage",{},"POST").then(res=>{
      if(!res.error){
        setHome(res.home)
      }
    })

    // https://zandokh.com:10007/apizandoV07/api/Homepage/getHomePage

    // https://ten11kh.com:10010/apizdtenV08/api/MenuApp/getMenu

  }

  const myFunction = (name) => {
    return name;
  };
  const handleClickBtn = () => {
    setValue1(1000);
    value2 = 1000;
  };

  const handleClickMe = () => {};

  return (
    <LayouteOne>
      <HomeSlider />
      <DynamicContent
        home={home}
      />
      <div className={styles.container}>
        <Row gutter={[10,10]}>
          {listProdcut.map((item, index) => {
            return (
              <Col span={6}>
                <div>
                  <ProductImage
                    image={"https://zandokh.com/image/cache/catalog/products/2022-06/42732/Ten11-Lady-Top (3)-cr-450x672.jpg"}
                  />
                  <ProductDes
                    // name={item.name}
                    // full_prie={item.full_prie}
                    {...item}
                  />
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </LayouteOne>
  );
};
export default Home;
