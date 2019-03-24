import React from "react";
import {MDBContainer, MDBRow, MDBCol, MDBMask, MDBView} from "mdbreact";
// import './index.css';



const ImageAndData = () => {
    return (


         <MDBContainer fluid>
            <MDBRow>
                <MDBCol md="6">
                    <MDBView hover zoom>
                        <img
                            src="https://mdbootstrap.com/img/Others/documentation/img%20(131)-mini.jpg"
                            className="img-fluid z-depth-5"
                            alt=""
                        />
                        <MDBMask className="flex-center">
                            <p className="white-text">zoom effect</p>
                        </MDBMask>
                    </MDBView>

                </MDBCol>

                <MDBCol lg="4" md="6" className="mb-4">

                    <p className="text-justify">Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum.
                        Donec sed odio operae,
                        eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis
                        piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium
                        purus sit amet fermentum.
                        Spacing to be done here and multiple similar components will be here
                    </p>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default ImageAndData;