import React, {Component} from "react";
import * as PropTypes from "prop-types";
import {connect} from "react-redux";
import {MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput} from 'mdbreact';
import {contact} from '../actions/contactActions';
import {Typography} from "@material-ui/core";
// import {isEmpty} from "lodash";

class FormPage extends Component {
    state = {
        formData: {},
        errors: {},
        submitted: false,
    };

    handleChange = e => {
        const {name, value} = e.target;
        this.setState(s => ({...s, formData: {...s.formData, [name]: value}}))
    };

    handleSubmit = e => {
        const {formData,submitted} = this.state;
        e.preventDefault();
        if(submitted) return null;
        this.setState({submitted: true});
        this.props.contact(formData).then(res => {
            if (res.response) return this.setState({formData: {}, errors: {}, submitted: false});
            return this.setState({errors: res.errors, submitted: false});
        })
    };

    render() {
        const {formData, errors, submitted} = this.state;

        // const errList = [];
        // for (let d in errors) {
        //     errList.push(errors[d]);
        // }

        return (
            <div className="bg">
                <MDBContainer style={{paddingTop: 50}}>

                    <MDBRow>
                        <MDBCol md="4">
                            <form
                                onSubmit={this.handleSubmit}
                                method="post"
                                style={{background: 'rgba(255,255,255,.8)', padding: 15}}>
                                <p className="h1 text-center mb-4 cursive black-text">Write to us</p>
                                <div className="change">
                                    <MDBInput
                                        name={'name'}
                                        label="Your name"
                                        group
                                        type="text"
                                        validate={false}
                                        error="wrong"
                                        success="right"
                                        value={formData.name}
                                        onChange={this.handleChange}
                                    />
                                    {errors.name && <Typography color={"error"} variant={"caption"}>{errors.name}</Typography>}
                                    <MDBInput
                                        name={'email'}
                                        label="Your email"
                                        group
                                        type="email"
                                        validate
                                        error="wrong"
                                        success="right"
                                        value={formData.email}
                                        onChange={this.handleChange}
                                    />
                                    {errors.email && <Typography color={"error"} variant={"caption"}>{errors.email}</Typography>}
                                    <MDBInput
                                        name={'where'}
                                        label="Where is your event ?"
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                        value={formData.where}
                                        onChange={this.handleChange}
                                    />
                                    {errors.where && <Typography color={"error"} variant={"caption"}>{errors.where}</Typography>}
                                    <br/>
                                    <MDBInput
                                        name={'event_date'}
                                        label="When is your event ?"
                                        group
                                        type="date"
                                        validate
                                        error="wrong"
                                        success="right"
                                        value={formData.event_date}
                                        onChange={this.handleChange}
                                    />
                                    {errors.event_date && <Typography color={"error"} variant={"caption"}>{errors.event_date}</Typography>}
                                    <MDBInput
                                        name={'how_find'}
                                        label="How did you find me?"
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                        value={formData.how_find}
                                        onChange={this.handleChange}
                                    />
                                    {errors.how_find && <Typography color={"error"} variant={"caption"}>{errors.how_find}</Typography>}
                                    <MDBInput
                                        name={'about'}
                                        group
                                        type="textarea"
                                        rows="2"
                                        outline
                                        label="Tell me about your event"
                                        value={formData.about}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                {errors.about && <Typography color={"error"} variant={"caption"}>{errors.about}</Typography>}
                                {/* {!isEmpty(errors) && errList.map((data, index) => (
                                    <Typography color={"error"} key={index} variant={"caption"}>{data}</Typography>
                                ))} */}
                                <div className="text-center">
                                    <MDBBtn outline color="black" type="submit" disabled={submitted}>
                                        Send <MDBIcon far icon="paper-plane" color="black" className="ml-1"/>
                                    </MDBBtn>
                                </div>
                            </form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

                {/*  <Footer/>*/}

            </div>
        );
    }
}


FormPage.propTypes = {
    contact: PropTypes.func.isRequired
};

export default connect(null, {contact})(FormPage);
