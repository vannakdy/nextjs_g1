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
const Home = () => {

  const [value1, setValue1] = useState(0);
  const [listProdcut, setListProduct] = useState(product);

  var value2 = 0;
  value2 = 100;
  const PI = 3.14;

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
