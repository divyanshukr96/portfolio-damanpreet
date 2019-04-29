import React from "react";
import {MDBContainer, MDBRow, MDBCol, MDBIcon} from "mdbreact";
import Lightbox from "react-image-lightbox";
import "./Lightbox.css";
import Footer from './Footer';
import axios from 'axios';
import {Link} from "react-router-dom";
import GalleryTab from "./GalleryTab";

class MainGallery extends React.Component {
    state = {
        photoIndex: 0,
        isOpen: false,
        images: []
    };

    componentWillMount() {
        axios.get('/api/gallery').then(res => {
            this.setState({images: res.data})
        })
    }

    renderImages = () => {
        let photoIndex = -1;
        const {images} = this.state;
        return images.map(imageSrc => {
            photoIndex++;
            const privateKey = photoIndex;
            return (
                <MDBCol md="4" key={photoIndex}>
                    <figure>
                        <img src={`/image/${imageSrc}`} alt="Gallery" className="img-fluid" onClick={() =>
                            this.setState({photoIndex: privateKey, isOpen: true})
                        }
                        />
                    </figure>
                </MDBCol>
            );
        })
   }

    render() {
        const {photoIndex, isOpen, images} = this.state;
        return (
            <div>
                <Link to={'/'}> <MDBIcon icon="arrow-left" size="2x" className="backicon"/> </Link>
                <MDBContainer className="mt-5">

                    <h1 className="cursive my-8 text-center">My Gallery</h1>
                    <br/>

                     <GalleryTab className="center"/>

                    <div className="mdb-lightbox">
                        <MDBRow>
                            {this.renderImages()}
                        </MDBRow>
                    </div>
                    {isOpen && (
                        <Lightbox
                            mainSrc={`/image/${images[photoIndex]}`}
                            nextSrc={`/image/${images[(photoIndex + 1) % images.length]}`}
                            prevSrc={`/image/${images[(photoIndex + images.length - 1) % images.length]}`}
                            imageTitle={photoIndex + 1 + "/" + images.length}
                            onCloseRequest={() => this.setState({isOpen: false})}
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

                <Footer reveal={true}/>

            </div>
        );
    }
}

export default MainGallery;