import Link from "next/link";
import React from "react"
import styles from "../../../styles/component/Header1.module.css"
import Button from "../button/Button";

import {ShoppingCartOutlined,NotificationOutlined} from "@ant-design/icons"
// import "../../../public/css/reset.min.css";
// import "../../../public/css/style.min.css";
// import "../../../public/css/boxicons.min.css";
import {
    MenuFoldOutlined,
    SmileOutlined,
    DownOutlined
} from "@ant-design/icons";
import {
    Drawer,
    Dropdown,
    Space,
    Menu,
    Divider,
    Badge
} from "antd"
const Header = () => {
    const [open,setOpen] = React.useState(false)

    const onClose= () => {
        setOpen(false)
    }

    const handleOpenDrawer = () => {
        setOpen(true)
    }

     var firstname = "", lastname = "", is_login, username,access_token="";
    if(typeof window != "undefined"){
         firstname = localStorage.getItem("firstname")
         lastname = localStorage.getItem("lastname")
         is_login = localStorage.getItem("is_login")
         username = localStorage.getItem("username")
         access_token = localStorage.getItem("access_token")
    }

    const handleLogout = () => {
      localStorage.setItem("is_login",0);
      localStorage.setItem("access_token","");
      localStorage.setItem("refresh_token","");
      localStorage.setItem("profile","");
      window.location.href = "/"
    }

    const menu = (
        <Menu
          items={[
            {
              key: '1',
              label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                  1st menu item
                </a>
              ),
            },
            {
              key: '2',
              label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                  2nd menu item (disabled)
                </a>
              ),
              icon: <SmileOutlined />,
              disabled: true,
            },
            {
              key: '3',
              label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                  3rd menu item (disabled)
                </a>
              ),
              disabled: true,
            },
            {
              key: '4',
              danger: true,
              label: 'a danger item',
            },
          ]}
        />
    );

    const overlay = (
        <div className={styles.containAccount}>
            <div className={styles.txtMain}>My Account</div>
            {/* <Divider/> */}
            <div className={styles.menuItem}>
              <a>Set Birthday</a>
              <a>Change Password</a>
              <a>Address</a>
            </div>
            <div className={styles.txtMain}>My Shop</div>
            <div className={styles.menuItem}>
              <a>Point</a>
              <a>Order</a>
              <a>Wish List</a>
              <a>Gift Cart</a>
            </div>
            <div className={styles.txtMain}>Setting</div>
            <div className={styles.menuItem}>
              <a>Clear cach</a>
            </div>

            <div style={{marginTop:10}}>
              <Button
                onClick={handleLogout}
                title={"Log out"}
              />
            </div>
        </div>
    )
    
    return (
        <div>
            <Drawer
               title="Flora"
               placement={"left"}
               width={500}
               onClose={onClose}
               visible={open}
            >
                <h1>Block A</h1>
                <h1>Block A</h1>
                <h1>Block A</h1>
            </Drawer>
            <body>
                <header class="header" id="header">
                    <div className={styles.cotainer}>
                        <div>
                            <a onClick={handleOpenDrawer}>
                                <MenuFoldOutlined
                                    className={styles.iconMenu}
                                />
                                <a>All</a>
                            </a>
                            <a href="/">Home</a>
                            <a href="/teacher">Teacher</a>
                            <a>About us</a>
                        </div>
                        <div>
                            {/* <Badge count={1}>
                              <NotificationOutlined
                                style={{
                                  fontSize:22
                                }}
                              />
                            </Badge> */}

                            {is_login == "0" &&  <Link href={"/login"}>Login</Link> }

                            {is_login == "1" && <div>
                              <Badge count={2} >
                                <ShoppingCartOutlined
                                  style={{
                                    fontSize:22,
                                    marginLeft : 15
                                  }}
                                />
                              </Badge>
                              <Dropdown overlay={overlay}>
                                  <a>
                                      <Space>
                                          {username} <DownOutlined />
                                      </Space>
                                  </a>
                              </Dropdown>
                            </div>}

                        </div>
                    </div>
                </header>
            </body>
        </div>
    )
}

export default Header;