import React   from "react";

const ProductImage = ({image}) => {

    return (
        <div>
            <img 
                src={image}
                width={"100%"}
                height={"100%"}
            />
        </div>
    )
}

export default ProductImage