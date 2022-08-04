
import { useState } from "react";
import LayouteOne from "./component/layout/LayouteOne";
import { fetchData } from "./helper";
import {useEffect} from "react";
import DynamicContent from "./component/home/DynamicContent";
const Home = () => {

  const [home,setHome] = useState([]);
  
  useEffect(()=>{
   getHomeInfo();
  },[])

  const getHomeInfo = () => {
    fetchData("api/Homepage/getHomePage",{},"POST").then(res=>{
      if(!res.error){
        setHome(res.home)
      }
    })

  }

  return (
    <LayouteOne>
      <DynamicContent
        home={home}
      />
    </LayouteOne>
  );
};
export default Home;
