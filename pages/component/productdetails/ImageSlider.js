
import {config} from "../../helper"
import 'react-slideshow-image/dist/styles.css'
import {Slide} from "react-slideshow-image"
const ImageSlider = ({
    data
}) => {

    return (
        <div className="slide-container">
            <Slide>
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
           </Slide>
        </div>
    )
}

export default ImageSlider;