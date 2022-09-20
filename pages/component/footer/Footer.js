
import styles from "./Footer.module.css";
import {Row,Col, Divider} from 'antd';
import {FacebookOutlined} from "@ant-design/icons"

import Link from "next/link";
const Footer = () => {

// About Gmarket
// User Agreement
// Privacy Policy
// Site Map
// Customer Service
//  Facebook

    return (
        <div 
            className={styles.container}
        >
            <Row>
                <Col span={4}>
                    <a className={styles.itemLink} href={""}>About Gmarket</a>
                </Col>
                <Col span={4}>
                    <a className={styles.itemLink} href={""}>User Agreement</a>
                </Col>
                <Col span={4}>
                    <a className={styles.itemLink} href={""}>Privacy Policy</a>
                </Col>
                <Col span={4}>
                    <a className={styles.itemLink} href={""}>Site Map</a>
                </Col>
                <Col span={4}>
                    <a className={styles.itemLink} href={""}>Customer Service</a>
                </Col>
                <Col span={4}>
                    <a className={styles.itemLink} href={""}><FacebookOutlined />Facebook</a>
                </Col>
            </Row>
            <Divider/>
            <Row gutter={5}>
               <Col span={4}>
                    <div className={styles.txtCustomer}>Customer Service</div>
                    <div className={styles.txtCustomer}>Dispute Settlement</div>
                    <div className={styles.txtCustomer}>Gmarket Inc</div>
               </Col>
               <Col span={16}>
                    <div>
                    9F, Toona Building, 223, Buil-ro, Bucheon-si, Gyeonggi-do, Rep. of Korea | Customer Inquiry :Click here
Dispute Settlement
Tel +82-2-1566-5701 (only in Korean) | Fax +82-2-589-8844 (only in Korean) | Mail : global@corp.gmarket.co.kr
Gangnam Finance Center, 152, Teheran-ro, Gangnam-gu, Seoul, Rep. of Korea | CEO : Hang Il Chun |
Business Registration No. : 220-81-83676 | E-commerce Registration: Gangnam No. 10630
                    </div>
                    <div>
                    Gmarket will not be held responsible for any liabilities arising in connection with any transactions between buyers and sellers on this website.
Copyright Gmarket Inc. All rights reserved.
                    </div>
                </Col>
               <Col span={4}>
                    <div className={styles.txtCustomer}>Customer Service</div>
                    <div className={styles.txtCustomer}>Dispute Settlement</div>
               </Col>
            </Row>
        </div>
    )
}

export default Footer;