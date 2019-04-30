import React, {Component} from 'react';
import {MDBCol, MDBRow} from "mdbreact";
import Lightbox from "react-image-lightbox";
import * as PropTypes from "prop-types";

class ImagesView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }


    renderImages = () => {
        let photoIndex = -1;
        const {images} = this.props;
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
    };

    render() {
        const {photoIndex, isOpen} = this.state;
        const {images} = this.props;

        return (
            <>
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
            </>
        );
    }
}

ImagesView.propTypes = {
    images: PropTypes.array.isRequired,
};

ImagesView.defaultProps = {
    images: []
};

export default ImagesView;