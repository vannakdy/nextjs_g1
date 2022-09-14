import { Col } from "antd";
import LayouteOne from "./component/layout/LayouteOne";
import { Button, Checkbox, Form, Input } from "antd";
import React, { useState } from "react";
import InputFloating from "./component/input/InputFloating";
import { fetchData } from "./helper";
import {useRouter} from "next/router"

const Login = () => {
  const route = useRouter()
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [message,setMessage] = useState("")

  const onChangeUsername = (event) => {
    setUsername(event.target.value)
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const onLogin = () => {
    setMessage("");
    var data = {
      "username" : username,
      "password" : password
    }
    fetchData("api/ApiLogin/login",data,"POST").then(res=>{
        console.log(res)
        if(res.error){
          var messageTmp = ""
          if(res.error.error_email){
            messageTmp = res.error.error_email
          }else if(res.error.error_login){
            messageTmp = res.error.error_login
          }
          setMessage(messageTmp)
        }else{
          localStorage.setItem("is_login",1);
          localStorage.setItem("access_token",res.access_token);
          localStorage.setItem("refresh_token",res.refresh_token);
          localStorage.setItem("profile",JSON.stringify(res.profile));
          localStorage.setItem("username",(res.profile.username));
          localStorage.setItem("firstname",(res.profile.firstname));
          localStorage.setItem("lastname",(res.profile.lastname));
          localStorage.setItem("email",(res.profile.email));
          localStorage.setItem("total_cart",res.total_cart);
          route.push("/")
        }
    })
  }

  return (
    <LayouteOne is_footer={false}>
      <Col span={12} offset={6}>
        <div className="txtBig">EXISTING CUSTOMER</div>
       
          <InputFloating
            value={username}
            placeholder="Username"
            onChange={onChangeUsername}
          />

          <InputFloating
            value={password}
            type="password"
            placeholder="Password"
            onChange={onChangePassword}
          />
          <div style={{paddingTop:15}}>
            {message != "" && 
              <div style={{fontSize:18,color:'red'}}>{message}</div>
            }
          </div>
          <br/>
          <Button onClick={onLogin} style={{width:200,backgroundColor:"#000",height:50}} className="btn_black" type="primary" htmlType="submit">
            LOGIN
          </Button>
     
      </Col>
    </LayouteOne>
  );
};

export default Login;
