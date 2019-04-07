import React from 'react';
import Logo from './../images/hsnlogo1.png';
import {MDBAnimation, MDBCol, MDBContainer, MDBMask, MDBRow, MDBView} from "mdbreact";
import Image1 from "../images/HN.jpg";
import Footer from './Footer';

const About = () => {
    return (
        <div>

            <MDBContainer fluid>
                <MDBRow>
                    <MDBCol md="6" lg="6">
                        <MDBAnimation type="fadeInUp" duration="2s">
                            <MDBView hover zoom className="imagelanding">
                                <img
                                    src={Logo}
                                    alt=""
                                    width={600}
                                    height={400}
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
                                <p className="bq-title">HSN photography</p>
                                <p> Donec sed odio operae,
                                    eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis
                                    piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium
                                    purus sit amet fermentum.
                                    Spacing to be done here and multiple similar components will be here
                                </p>
                            </blockquote>
                        </MDBAnimation>

                    </MDBCol>
                </MDBRow>

                <br/>
                <br/>

                <MDBRow>
                    <MDBCol md="6" lg="6">

                        <MDBAnimation  type="fadeInUp" duration="2s">
                            <br/>
                            <br/>
                            <br/>
                            <blockquote className="blockquote text-center">
                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                    posuere erat a ante.</p>
                                <footer className="blockquote-footer mb-3">Someone famous in <cite title="Source Title">Source
                                    Title</cite></footer>
                            </blockquote>
                        </MDBAnimation>

                    </MDBCol>

                    <MDBCol lg="6" md="6" className="mb-4">

                        <MDBAnimation revial type="fadeInRight" duration="2s">
                            <MDBView hover zoom className="imagelanding">
                                <img
                                    src={Image1}
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