import React from "react";
import {MDBContainer, MDBIcon} from "mdbreact";
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
        // axios.get('/api/gallery').then(res => {
        //     this.setState({images: res.data})
        // })
    }



    render() {
        return (
            <>
                <Link to={'/'}> <MDBIcon icon="arrow-left" size="2x" className="backicon"/> </Link>
                <MDBContainer className="mt-5 imageRoot">

                    <h1 className="cursive my-8 text-center">My Gallery</h1>
                    <br/>

                     <GalleryTab className="center"/>

                </MDBContainer>
                <Footer reveal={true}/>
            </>
        );
    }
}

export default MainGallery;