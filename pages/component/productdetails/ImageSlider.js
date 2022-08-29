
import {config} from "../../helper"
import {Slide} from "react-slideshow-image"
const ImageSlider = ({
    data
}) => {

    return (
        <div className="slide-container">
            {data && data.length > 0 && <Slide>
                {data.map((item,index)=>{
                        return (
                            <div key={index}>
                                <img
                                    src={config.imagePath + item.image}
                                    width = {"100%"}
                                />
                            </div>
                        )
                })} 
           </Slide>}
        </div>
    )
}

export default ImageSlider;