import React from "react";
import PropType from "prop-types"
function ImageWithFallback(props) {

    //use state in functional component 
    let [imgSrc, updateImage] = React.useState(props.source)

    return (
        <img src={imgSrc}
            style={{ height: '250px', width: '250px' }}
            onError={() => updateImage('/logo512.png')}
            className="img-thumbnail" alt="ptoduct"
        />
    )

}
export default ImageWithFallback;
ImageWithFallback.propType = {
    source: PropType.string.isRequired
}