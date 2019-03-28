import React from "react";
import { MDBAnimation } from "mdbreact";

const AnimationPage = () => {
    return (
        <>
            <MDBAnimation reveal type="bounceInUp">
                <img alt="A view on mountains." className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(31).jpg" />
            </MDBAnimation>
            <MDBAnimation reveal type="tada">
                <img alt="Cottage on a lake surrounded by mountains." className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(32).jpg" />
            </MDBAnimation>
            <MDBAnimation reveal type="fadeInLeft">
                <img alt="A boat floating on an ocean" className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg" />
            </MDBAnimation>

            <MDBAnimation reveal type="fadeInRight">
                <img alt="View on mountains from mountain top." className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" />
            </MDBAnimation>
            <MDBAnimation reveal type="fadeInRight">
                <img alt="Rocky shore in the morning." className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(14).jpg" />
            </MDBAnimation>
            <MDBAnimation reveal type="fadeInUp">
                <p>she left me and its fine because i was not happy</p>
            </MDBAnimation>
        </>
    );
};

export default AnimationPage;