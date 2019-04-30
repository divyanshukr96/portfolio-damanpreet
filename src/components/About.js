import React from 'react';
import {MDBAnimation, MDBCol, MDBContainer, MDBMask, MDBRow, MDBView} from "mdbreact";
import Harinder from "./../images/harinder.jpg";
import HarinderWife from "./../images/harinderwife.jpg";
import Footer from './Footer';
import Navbar from './Navbar'

const About = () => {
    return (
        <div>
            <Navbar/>
            <div className="afterNav"/>
            <MDBContainer fluid>
                <MDBRow>
                    <MDBCol md="6" lg="6">
                        <MDBAnimation type="fadeInUp" duration="2s">
                            <MDBView hover zoom >
                                <img
                                    src={Harinder}
                                    alt={"harinder"}
                                    width={450}
                                    style={{padding: 5, maxWidth: '100%'}}
                                />
                            </MDBView>
                        </MDBAnimation>
                    </MDBCol>
                    <MDBCol lg="6" md="6" className="mb-4">
                        <MDBAnimation type="fadeInRight" duration="2s">
                            <blockquote className="blockquote bq-warning">
                                <p className="bq-title">A little about me</p>
                                <p style={{textAlign: "justify"}}>
                                    In 2017, I quit my day job to pursue my passion as a full time photographer and I am
                                    getting inspired every day for a new picture. I am tempted towards nature and love
                                    to travel, my camera comes with me too! I try to capture as many beautiful moments
                                    as possible and create new challenges for myself. Another thing that simulates me is
                                    emotions, I love to capture moments of joy, deep love and an honest smile. Wedding
                                    photography helps me flow these emotions and portray them on the best canvas.
                                </p>
                            </blockquote>
                        </MDBAnimation>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="6">
                        <MDBAnimation type="fadeInLeft" duration="2s">
                            <blockquote className="blockquote bq-warning">
                                <p className="bq-title">My vision</p>
                                <p style={{textAlign: "justify"}}>
                                    Love, passion and care that a couple exhibits, the best way to show them in
                                    prewedding photography in which I take pride. I’ve always loved taking pictures
                                    as far as I can remember. It’s one of the most simple ways of capturing emotion
                                    onto a frame. I love helping people create new memories or restore old ones.
                                    Providing beautiful images along with exceptional service to my clients is what
                                    drives me! I love the outdoors and photography makes you want to get out and see
                                    the world at different angles.
                                </p>
                            </blockquote>
                        </MDBAnimation>
                        <MDBAnimation type="fadeInUp" duration="2s">
                            <blockquote className="blockquote">
                                <p style={{textAlign: "justify"}} className="mb-0">
                                    I live in Montreal, in the heart of downtown but my roots belong to India. I
                                    graduated from Concordia university with Industrial engineering degree however I
                                    always had a pull towards photography. During undergrad, I have done professional
                                    pre-wedding photoshoots and landscapes. In 2017, I decided to pursue a full-time
                                    career in photography. I got married in 2018 to my better half Raman Nanrhay, who
                                    challenges me to be a better photographer every day.
                                </p>
                            </blockquote>
                        </MDBAnimation>

                        <MDBAnimation type="fadeInLeft" duration="2s">
                            <blockquote className="blockquote">
                                <p className="mb-0 abouttext">
                                    There is always something to learn in photography. I keep myself updated with
                                    new technology, technique or new hacks to try.
                                    Crafting a story for my clients is what I was born to do!
                                    I am excited about being part of your life!</p>
                                <footer className="blockquote-footer mb-3">Harinder Singh <cite title="Source Title"/>
                                </footer>
                            </blockquote>
                        </MDBAnimation>
                    </MDBCol>
                    <MDBCol lg="6" md="6" className="mb-4">
                        <MDBAnimation type="fadeInUp" duration="2s">
                            <MDBView hover zoom className="">
                                <img
                                    src={HarinderWife}
                                    className="img-fluid"
                                    alt=""
                                    width={600}
                                    height={300}
                                />
                                <MDBMask className="flex-center"><p className="white-text"/></MDBMask>
                            </MDBView>
                        </MDBAnimation>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <Footer/>
        </div>
    );
};

export default About;