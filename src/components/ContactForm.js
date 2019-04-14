

import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import Footer from "./Footer";
import DatePicker from './DatePicker';
import TextField from "@material-ui/core/TextField";
//https://mdbootstrap.com/docs/react/css/background-image/

//rgba(224, 173, 92, 0.5)

const FormPage = () => {
    return (
        <div className="bg">
        <MDBContainer style={{paddingTop:50}}>

            <MDBRow>
                <MDBCol md="4">
                    <form style={{background:'rgba(255,255,255,.8)',padding:15}}>
                        <p className="h1 text-center mb-4 cursive black-text">Write to us</p>
                    <div className="change">
                        <MDBInput
                            label="Your name"
                            group
                            type="text"
                            validate
                            error="wrong"
                            success="right"
                        />
                        <MDBInput
                            label="Your email"
                            group
                            type="email"
                            validate
                            error="wrong"
                            success="right"
                        />

                        <MDBInput
                            label="Where is your event ?"
                            group
                            type="text"
                            validate
                            error="wrong"
                            success="right"
                        />

                        <MDBInput
                            label="When is your event ?"
                            group
                            type="date"
                            validate
                            error="wrong"
                            success="right"
                        />

                        <MDBInput
                            label="How did you find me?"
                            group
                            type="text"
                            validate
                            error="wrong"
                            success="right"
                        />

                        <MDBInput
                            group
                            type="textarea"
                            rows="2"
                            outline
                            label="Tell me about your event"
                        />
                    </div>
                    <div className="text-center">
                        <MDBBtn outline color="black">
                            Send <MDBIcon far icon="paper-plane" color="black" className="ml-1" />
                        </MDBBtn>
                    </div>
                </form>
                    <div style={{backgroundColor:'red'}}>

                    </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

          {/*  <Footer/>*/}

        </div>
    );
};

export default FormPage;