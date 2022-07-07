import React   from "react";

const ProductDes = ({
    name,
    full_prie,
    discount,
    price,
    color
}) => {

    return (
        <div>
           <div>{name}</div>
                <div>{full_prie}</div>
                <div>{discount} % </div>
                <div>{price}</div>
                {color && color.map((item1,index1)=>{
                return (
                    <div 
                    key={index1}
                    style={{
                        width:20,
                        height:20,
                        margin:2,
                        border: "1px solid",
                        backgroundColor:item1
                    }} 
                    />
                )
            })}
        </div>
    )
}

export default ProductDes