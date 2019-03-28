import React from "react";
import {MDBContainer, MDBRow, MDBCol, MDBMask, MDBView, MDBAnimation} from "mdbreact";
// import './index.css';
import Image1 from './../images/HN.jpg';



const ImageAndData = () => {
    return (
         <MDBContainer fluid>
            <MDBRow>
                <MDBCol md="6" lg="6">
                    <MDBAnimation revial type="fadeInUp" duration="2s">
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

                <MDBCol lg="6" md="6" className="mb-4">

                    <MDBAnimation reveal type="fadeInRight" duration="2s">
                        <br/>
                        <br/>
                        <br/>
                        <blockquote className="blockquote bq-primary">
                            <p className="bq-title">Info notification</p>
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

                     <MDBAnimation reveal type="fadeInUp" duration="2s">
                         <br/>
                         <br/>
                         <br/>
                         <blockquote className="blockquote bq-primary">
                             <p className="bq-title">Info notification</p>
                             <p> Donec sed odio operae,
                                 eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis
                                 piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium
                                 purus sit amet fermentum.
                                 Spacing to be done here and multiple similar components will be here
                             </p>
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
    );
}

export default ImageAndData;