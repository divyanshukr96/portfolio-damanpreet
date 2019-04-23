import React from "react";
import {MDBContainer, MDBRow, MDBCol, MDBMask, MDBView, MDBAnimation} from "mdbreact";
import * as PropTypes from "prop-types";
import {isEmpty} from "lodash";

const ImageAndData = (props) => {
    const {image} = props;
    return (
        <MDBContainer fluid>
            {!isEmpty(image) && image.map((data, index) => (
                <MDBRow key={index} style={{alignItems: 'center', flexDirection: index % 2 ? 'row-reverse' : 'row'}}>
                    <MDBCol md="6" lg="6">
                        <MDBAnimation reveal type={index % 2 ? 'fadeInRight' : 'fadeInUp'} duration="2s">
                            <MDBView hover zoom className="">
                                <img
                                    src={`/image/${data.photo}`}
                                    className="img-fluid"
                                    style={{float: index % 2 ? null : 'right'}}
                                    alt=""
                                    width={600}
                                    height={500}
                                />
                                <MDBMask className="flex-center">
                                    {/*<p className="white-text">zoom effect</p>*/}
                                </MDBMask>
                            </MDBView>
                        </MDBAnimation>
                    </MDBCol>
                    <MDBCol lg="6" md="6" className="mb-4">
                        <MDBAnimation reveal type={index % 2 ? 'fadeInUp' : 'fadeInRight'} duration="2s">
                            <blockquote className="blockquote bq-primary">
                                <p className="bq-title">{data.title}</p>
                                <p>{data.about}</p>
                            </blockquote>
                        </MDBAnimation>
                    </MDBCol>
                </MDBRow>
            ))}
        </MDBContainer>
    );
};

ImageAndData.propTypes = {
    image: PropTypes.array.isRequired,
};

ImageAndData.defaultProps = {
    image: []
};

export default ImageAndData;