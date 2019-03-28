import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";
import "./Lightbox.css";

import Image1 from './../images/BAR_1640.jpg';
import Image2 from './../images/BAR_1676.jpg';
import Image3 from './../images/BAR_9771.jpg';
import Image4 from './../images/DSC_9781.JPG';
import Image5 from './../images/DSC_9674-2.jpg';
import Image6 from './../images/49.jpg';
import Image7 from './../images/DSC_1311.jpg';
import Image8 from './../images/DSC01871.jpg';
import Image9 from './../images/DSC01916.jpg';






class LightboxPage extends React.Component {
   /* state = {
        photoIndex: 0,
        isOpen: false,
        images: [
            'https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(63).jpg',
            'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(66).jpg',
            'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(65).jpg',
            'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(67).jpg',
            'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(68).jpg',
            'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(64).jpg',
            'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(69).jpg',
            'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(59).jpg',
            'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(70).jpg'
        ]
    }
*/

    state = {
        photoIndex: 0,
        isOpen: false,
        images: [
           Image1,Image2,Image3,Image4,Image5,Image6,Image7,Image8,Image9
        ]
    }

    renderImages = () => {
        let photoIndex = -1;
        const { images } = this.state;

        return images.map(imageSrc => {
            photoIndex++;
            const privateKey = photoIndex;
            return (
                <MDBCol md="4" key={photoIndex}>
                    <figure>
                        <img src={imageSrc} alt="Gallery" className="img-fluid" onClick={()=>
                            this.setState({ photoIndex: privateKey, isOpen: true })
                        }
                        />
                    </figure>
                </MDBCol>
            );
        })
    }

    render() {
        const { photoIndex, isOpen, images } = this.state;
        return (
            <MDBContainer className="mt-5">
                <blockquote className="blockquote bq-primary">
                    <p className="bq-title">Featured Work</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores quibusdam dignissimos itaque harum illo!
                        Quidem, corporis at quae tempore nisi impedit cupiditate perferendis nesciunt, ex dolores doloremque!
                        Sit, rem, in?
                    </p>
                </blockquote>
                <div className="mdb-lightbox">
                    <MDBRow>
                        {this.renderImages()}
                    </MDBRow>
                </div>
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        imageTitle={photoIndex + 1 + "/" + images.length}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length
                            })
                        }
                    />
                )}
            </MDBContainer>
        );
    }
}

export default LightboxPage;