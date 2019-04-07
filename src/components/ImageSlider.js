import ImageGallery from 'react-image-gallery';
import React, {Component} from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import * as PropTypes from "prop-types";
import {isEmpty} from "lodash";

class ImageSlider extends Component {

    render() {

<<<<<<< Updated upstream
        let images = [];
        const {carousel} = this.props;
        if (!isEmpty(carousel)) {
            for (const d in carousel) images.push({original: `http://127.0.0.1:8000/image/${carousel[d].name}`});
        }
=======
        console.log(Image1);

        const images = [
            {
                original: `${Image1}`,
                thumbnail: 'http://lorempixel.com/250/150/nature/1/',
                description:'pratyush thapliyal',
                originalClass:{
                   fontFamily:'arial',
                }
            },
            {
                original: `${Image4}`,
                thumbnail: 'http://lorempixel.com/250/150/nature/2/',
                description:'love is in the air'
            },
            {
                original: `${Image2}`,
                thumbnail: 'http://lorempixel.com/250/150/nature/3/',
                description:'this is sparta'
            }
        ];

>>>>>>> Stashed changes
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