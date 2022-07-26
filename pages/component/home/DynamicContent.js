import { Carousel } from 'antd';
import React from 'react';
import {config} from "../../helper"

const DynamicContent = ({home}) => {

    const renderItem = () =>{
        var Content = null;
        home && home.map((item,index)=>{
            var element = item.element;
            if(element == "hos_slideshow"){
                item.sections.map((item1,index)=>{
                    Content = 
                        <div>
                            {Content}
                            <img
                                src={config.imagePath + item1.image}
                                style={{width:"100%"}}
                            />
                        </div>
                })
            }else if(false){

            }
        })
        return Content
    }
    
    return (
        <div>
            {renderItem()}
        </div>
    )
}

export default DynamicContent;