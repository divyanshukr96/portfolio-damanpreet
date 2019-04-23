import React from "react";
import {MDBContainer, MDBRow, MDBCol, MDBBtn} from "mdbreact";
import Lightbox from "react-image-lightbox";
import "./Lightbox.css";
import {Link} from "react-router-dom";
import * as PropTypes from "prop-types";

class LightboxPage extends React.Component {
    state = {
        photoIndex: 0,
        isOpen: false,
    };

    renderImages = () => {
        let photoIndex = -1;
        const {gallery} = this.props;
        return gallery.map(imageSrc => {
            photoIndex++;
            const privateKey = photoIndex;
            return (
                <MDBCol md="4" key={photoIndex}>
                    <figure>
                        <img src={`/image/${imageSrc.name}`} alt="Gallery" className="img-fluid"
                             onClick={() =>
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
        const {gallery} = this.props;
        return (
            <MDBContainer className="mt-5">
                <blockquote className="blockquote bq-primary">
                    <p className="bq-title">Featured Work</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores quibusdam dignissimos itaque
                        harum illo!
                        Quidem, corporis at quae tempore nisi impedit cupiditate perferendis nesciunt, ex dolores
                        doloremque!
                        Sit, rem, in?
                    </p>
                    
                    <Link to={'/gallery'}>
                        <MDBBtn className="buttonright" outline color="primary">
                            View Complete Gallery
                        </MDBBtn>
                    </Link>
                    
                </blockquote>
                <div className="mdb-lightbox">
                    <MDBRow>
                        {this.renderImages()}
                    </MDBRow>
                </div>
                {isOpen && (
                    <Lightbox
                        mainSrc={`/image/${gallery[photoIndex].name}`}
                        nextSrc={`/image/${gallery[(photoIndex + 1) % gallery.length].name}`}
                        prevSrc={`/image/${gallery[(photoIndex + gallery.length - 1) % gallery.length].name}`}
                        imageTitle={photoIndex + 1 + "/" + gallery.length}
                        onCloseRequest={() => this.setState({isOpen: false})}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + gallery.length - 1) % gallery.length
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % gallery.length
                            })
                        }
                    />
                )}
            </MDBContainer>
        );
    }
}

LightboxPage.propTypes = {
    gallery: PropTypes.array.isRequired,
};

LightboxPage.defaultProps = {
    gallery: []
};

export default LightboxPage;