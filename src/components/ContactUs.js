import React from 'react';
import {Link} from "react-router-dom";
import {MDBContainer, MDBIcon} from "mdbreact";
import ContactForm from "../components/ContactForm";


const ContactUs = () => {
    return (
        <div className="bg">
            <div>
                <Link to={'/'}> <MDBIcon icon="arrow-left" size="2x" className="backicon"/> </Link>
                <MDBContainer className="imageRoot">
                    <h1 className="cursive my-8 text-center">Contact Us</h1>
                </MDBContainer>
            </div>
            <MDBContainer><ContactForm/></MDBContainer>
        </div>
    );
};

export default ContactUs;