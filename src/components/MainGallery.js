import React from "react";
import {MDBContainer, MDBIcon} from "mdbreact";
import "./Lightbox.css";
import Footer from './Footer';
import {Link} from "react-router-dom";
import GalleryTab from "./GalleryTab";

const MainGallery = () => (
    <>
        <Link to={'/'}> <MDBIcon icon="arrow-left" size="2x" className="backicon"/> </Link>
        <MDBContainer className="imageRoot">

            <h1 className="cursive my-8 text-center">My Gallery</h1>
            <br/>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <GalleryTab className="center"/>
            </div>


        </MDBContainer>
        <Footer reveal={true}/>
    </>
);

export default MainGallery;