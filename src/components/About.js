import React from 'react';
import Logo from './../images/hsnlogo1.png';
import {MDBAnimation, MDBCol, MDBContainer, MDBMask, MDBRow, MDBView} from "mdbreact";
import Harinder from "./../images/harinder.jpg";
import HarinderWife from "./../images/harinderwife.jpg";
import Footer from './Footer';
import Navbar from './Navbar'

const About = () => {
    return (
        <div>
            <Navbar/>
            <br/><br/>  <br/><br/>   <br/><br/>   <br/><br/>
            <MDBContainer fluid>
                <MDBRow>
                    <MDBCol md="6" lg="6">
                        <MDBAnimation type="fadeInUp" duration="2s">
                            <MDBView hover zoom className="imagelanding">
                                <img
                                    src={Harinder}
                                    alt=""
                                    width={650}
                                    height={450}
                                    style={{padding:80,marginLeft:20}}
                                />
                            </MDBView>
                        </MDBAnimation>


                    </MDBCol>

                    <MDBCol lg="6" md="6" className="mb-4">

                        <MDBAnimation type="fadeInRight" duration="2s">
                            <br/>
                            <br/>
                            <br/>
                            <blockquote className="blockquote bq-warning">
                                <p className="bq-title">A little about me</p>
                                <p style={{textAlign:"justify"}}>In 2017, I quit my day job to pursue my passion as a full time photographer and I am getting inspired every day for a new picture.

                                    I am tempted towards nature and love to travel, my camera comes with me too! I try to capture as many beautiful moments as possible and create new challenges for myself.

                                    Another thing that simulates me is emotions, I love to capture moments of joy, deep love and an honest smile. Wedding photography helps me flow these emotions and portray them on the best canvas.

                                </p>
                            </blockquote>
                        </MDBAnimation>

                    </MDBCol>
                </MDBRow>

                <br/>
                <br/>

                <MDBRow>
                    <MDBCol md="6" lg="6">

                        <MDBRow>
                            <MDBAnimation reveal type="fadeInUp" duration="2s">
                            <br/>
                            <br/>
                            <br/>
                            <blockquote className="blockquote bq-warning">
                                <p className="bq-title">My vision</p>
                                <p style={{textAlign:"justify"}}>

                                    Love, passion and care that a couple exhibits, the best way to show them in prewedding photography in which I take pride.

                                    I live in Montreal, in the heart of downtown but my roots belong to India.

                                    I got married to love of my life in 2018 and we are young and energetic couple who creates no boundaries on creativity.
                                </p>
                            </blockquote>
                        </MDBAnimation>

                        </MDBRow>

                        <MDBRow>

                            <blockquote className="blockquote">
                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                <footer className="blockquote-footer mb-3">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                            </blockquote>

                        </MDBRow>


                    </MDBCol>

                    <MDBCol lg="6" md="6" className="mb-4">

                        <MDBAnimation reveal type="fadeInRight" duration="2s">
                            <MDBView hover zoom className="imagelanding">
                                <img
                                    src={HarinderWife}
                                    className="img-fluid"
                                    alt=""
                                    width={600}
                                    height={500}
                                />
                                <MDBMask className="flex-center">
                                    <p className="white-text">zoom effect</p>
                                </MDBMask>
                            </MDBView>
                        </MDBAnimation>



                    </MDBCol>
                </MDBRow>


            </MDBContainer>
        <Footer reveal={false}/>
        </div>
    );
};

export default About;