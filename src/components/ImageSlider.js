import ImageGallery from 'react-image-gallery';
import React, {Component} from "react";
import "react-image-gallery/styles/css/image-gallery.css";

import Image1 from './../images/_MG_3815.jpg';
import Image2 from './../images/BAR_1640.jpg';
import Image3 from './../images/_MG_3906.jpg';
import Image4 from './../images/_MG_3908.jpg';
import Image5 from './../images/_MG_3908.jpg';



class ImageSlider extends Component {

    render() {

        console.log(Image1);

        const images = [
            {
                original: `${Image1}`,
                thumbnail: 'http://lorempixel.com/250/150/nature/1/',
                description:'pratyush thapliyal'
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

        return (
            <ImageGallery

            items={images}
            infinite={true}
            showNav={true}//can be made true..need to think over it
            showFullscreenButton={false}//think over this too
            showPlayButton={false}
            showThumbnails={false}
            autoPlay={false}//make this true when development is done
            slideDuration={1500}
            slideInterval={5000}/>
        );
    }

}

export default ImageSlider;