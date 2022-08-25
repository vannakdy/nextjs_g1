
import {config} from "../../helper"
const ImageSlider = ({
    data
}) => {

    return (
        <div>
           {data.map((item,index)=>{
                return (
                    <div key={index}>
                        <img
                            src={config.imagePath + item.image}
                            width = {400}
                        />
                    </div>
                )
           })} 
        </div>
    )
}

export default ImageSlider;