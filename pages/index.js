import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Index.module.css';
import Button from './component/button/Button';
import {useState} from "react";
import LayouteOne from './component/layout/LayouteOne';

const Home = () => {
  var arr = [
    {
      id : 101,
      name :  "Dell",
      catgory : "Computer",
      color : "black",
      price : 1000
    },
    {
      id : 102,
      name :  "Mac",
      catgory : "Computer",
      color : "black",
      price : 1000
    },
    {
      id : 103,
      name :  "Lenevo",
      catgory : "Computer",
      color : "black",
      price : 1000
    }
  ]

  const [value1,setValue1] = useState(0);
  const [listProdcut,setListProduct] = useState(arr)

  var value2 = 0;
  value2 = 100;
  const PI = 3.14;

  const myFunction = (name) => {
      return name
  }
  const handleClickBtn = () => {
    setValue1(1000)
    value2 = 1000
  }

  const handleClickMe = () => {

  }

  return (
    <LayouteOne>
      <div className={styles.container}>

      <Button
        title={"Click ME"}
        onClick={handleClickMe}
      />
      <h1 style={{color:'red',paddingBottom:100}}>value1 : {value1}</h1>
      <h1>value2 : {value2}</h1>
      <h1>{PI}</h1>
      <h1>{myFunction("Jon")}</h1>
      <h1>Hello Next.js</h1>
      <button onClick={handleClickBtn}>Click me</button><br/>
      {listProdcut.map((item,index)=>{
        return (
          <div 
            key={index}
            style={{
              display : "flex",
              marginBottom : 10
            }}
          >
              <div style={{
                width : 90,
                height :110,
                backgroundColor :"gray"
              }}/>
              <div
                style={{
                  paddingLeft:15
                }}
              >
                <div>{item.name}</div>
                <div>{item.catgory}</div>
                <div>Color : {item.color}</div>
                <div>Price : {item.price}</div>
              </div>
          </div>
        )
      })}
    </div>
    </LayouteOne>
  )
}
export default Home;
