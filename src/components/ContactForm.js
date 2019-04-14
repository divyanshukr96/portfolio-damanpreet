import React, {Component} from "react";
import * as PropTypes from "prop-types";
import {connect} from "react-redux";
import {MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput} from 'mdbreact';
import {contact} from '../actions/contactActions';
import {Typography} from "@material-ui/core";
import {isEmpty} from "lodash";

class FormPage extends Component {
    state = {
        formData: {},
        errors: {},
        submitted: false,
    };

    handleChange = e => {
        const {name, value} = e.target;
        this.setState(s => ({...s, formData: {[name]: value}}))
    };

    handleSubmit = e => {
        const {formData} = this.state;
        e.preventDefault();
        this.setState({submitted: true});
        this.props.contact(formData).then(res => {
            if (res.response) return this.setState({formData: {}, errors: {}, submitted: false});
            return this.setState({errors: res.errors, submitted: false});
        })
    };

    render() {
        const {formData, errors, submitted} = this.state;

        const errList = [];
        for (let d in errors) {
            errList.push(errors[d]);
        }

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
                                        validate
                                        error="wrong"
                                        success="right"
                                        value={formData.name}
                                        onChange={this.handleChange}
                                    />
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
                                {!isEmpty(errors) && errList.map((data, index) => (
                                    <Typography color={"error"} key={index} variant={"caption"}>{data}</Typography>
                                ))}
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
