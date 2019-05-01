import React from "react";
import {MDBCol, MDBContainer, MDBRow, MDBFooter, MDBAnimation} from "mdbreact";
import {Link} from "react-router-dom";

const Footer = () => {
    return (


        <MDBAnimation reveal type="fadeInUp">
            <MDBFooter color="indigo" className="font-small pt-0">
                <MDBContainer>
                    <MDBRow className="pt-5 mb-3 text-center d-flex justify-content-center">
                        <MDBCol md="2" className="b-3">

                            <h6 className="title font-weight-bold">
                                <Link to={'/about'}> About </Link>
                            </h6>
                        </MDBCol>
                        <MDBCol md="2" className="b-3">
                            <h6 className="title font-weight-bold">
                                <Link to={'/gallery'}> Gallery </Link>
                            </h6>
                        </MDBCol>
                        {/*<MDBCol md="2" className="b-3">*/}
                        {/*    <h6 className="title font-weight-bold">*/}
                        {/*        <a href="#!">Find Us</a>*/}
                        {/*    </h6>*/}
                        {/*</MDBCol>*/}
                        {/*<MDBCol md="2" className="b-3">*/}
                        {/*    <h6 className="title font-weight-bold">*/}
                        {/*        <a href="#!">Help</a>*/}
                        {/*    </h6>*/}
                        {/*</MDBCol>*/}
                        <MDBCol md="2" className="b-3">
                            <h6 className="title font-weight-bold">
                                <Link to={"/contact"}>Contact</Link>
                            </h6>
                        </MDBCol>
                    </MDBRow>
                    <hr className="rgba-white-light" style={{margin: "0 15%"}}/>
                    <MDBRow className="d-flex text-center justify-content-center mb-md-0 mb-4">
                        <MDBCol md="8" sm="12" className="mt-5">
                            <p style={{lineHeight: "1.7rem"}}>

                            </p>
                        </MDBCol>
                    </MDBRow>
                    <hr className="clearfix d-md-none rgba-white-light" style={{margin: "10% 15% 5%"}}/>
                    <MDBRow className="pb-3">
                        <MDBCol md="12">
                            <div className="mb-5 flex-center">
                                <a className="fb-ic" href="https://www.facebook.com/harindernanrhay/"
                                   target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook-f fa-lg white-text mr-md-4"> </i>
                                </a>
                                <a className="tw-ic" href='#!'>
                                    <i className="fab fa-twitter fa-lg white-text mr-md-4"> </i>
                                </a>
                                <a className="gplus-ic" href="#!">
                                    <i className="fab fa-google-plus-g fa-lg white-text mr-md-4">

                                    </i>
                                </a>
                                <a className="li-ic" href='#!'>
                                    <i className="fab fa-linkedin-in fa-lg white-text mr-md-4"> </i>
                                </a>
                                <a className="ins-ic" href="https://www.instagram.com/harinder_nanrhay/"
                                   target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram fa-lg white-text mr-md-4"> </i>
                                </a>
                                <a className="pin-ic" href="#!">
                                    <i className="fab fa-pinterest fa-lg white-text"> </i>
                                </a>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright: <a href="/"> www.hsnphotos.com </a>
                    </MDBContainer>
                </div>
            </MDBFooter>
        </MDBAnimation>
    );
}

export default Footer;