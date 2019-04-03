import ImageGallery from 'react-image-gallery';
import React, {Component} from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import * as PropTypes from "prop-types";
import {isEmpty} from "lodash";

class ImageSlider extends Component {

    render() {

        let images = [];
        const {carousel} = this.props;
        if (!isEmpty(carousel)) {
            for (const d in carousel) images.push({original: `http://127.0.0.1:8000/image/${carousel[d].name}`});
        }
        return (
            <ImageGallery
                items={images}
                infinite={true}
                showNav={false}//can be made true..need to think over it
                showFullscreenButton={false}//think over this too
                showPlayButton={false}
                showThumbnails={false}
                autoPlay={true}//make this true when development is done
                slideDuration={1500}
                slideInterval={5000}/>
        );
    }
}

ImageSlider.propTypes = {
    carousel: PropTypes.array.isRequired,
};
ImageSlider.defaultProps = {
    carousel: []
};

export default ImageSlider;