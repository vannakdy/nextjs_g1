import { Col } from "antd";
import LayouteOne from "./component/layout/LayouteOne";
import { Button, Checkbox, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import InputFloating from "./component/input/InputFloating";
import { fetchData, fetchDataDemo } from "./helper";
import {useRouter} from "next/router"

const Teacher = () => {
  const [list,setList] = useState([])
  
  useEffect(()=>{
    getListTeacher()
  },[])

  const getListTeacher = () => {
    fetchDataDemo("teacher",{},"GET").then(res=>{
      console.log(res)
    })
  }

  const handleGetAgain = () => {
    getListTeacher()
  }

  return (
    <LayouteOne is_footer={false}>
      <Col span={12} offset={6}>
        <div className="txtBig">Teacher</div>
        <Button onClick={handleGetAgain}>Get list Again</Button>
      </Col>
    </LayouteOne>
  );
};

export default Teacher;
