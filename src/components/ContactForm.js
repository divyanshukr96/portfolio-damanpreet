import React, {Component} from 'react';
import * as PropTypes from 'prop-types';
import {TextField, withStyles} from "@material-ui/core";
import {MDBBtn, MDBIcon} from "mdbreact";
import {isEmpty} from 'lodash'
import {contact} from '../actions/contactActions'
import {connect} from "react-redux";

const styles = theme => ({
    root: {
        padding: theme.spacing.unit * 1.6,
        background: 'rgba(255,255,255,.8)',
        width: 500,
        maxWidth: '100%',
        margin: `40px 0`,
    }
});

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {},
            errors: {}
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState(s => ({...s, formData: {...s.formData, [name]: value}}))
    };

    handleSubmit = e => {
        const {formData,submitted} = this.state;
        e.preventDefault();
        if(submitted) return null;
        this.setState({submitted: true});
        this.props.contact(formData).then(res => {
            if (res.response) {
                return this.setState({formData: {}, errors: {}, submitted: false});
            }
            return this.setState({errors: res.errors, submitted: false});
        })
    };

    render() {
        const {classes} = this.props;
        const {formData, errors, submitted} = this.state;
        return (
            <form className={classes.root} onSubmit={this.handleSubmit} autoComplete="off"
                  method={"POST"}>
                <p className="h1 text-center mb-0 cursive black-text">Write to us</p>
                <TextField
                    fullWidth
                    required
                    id={"name"}
                    name={"name"}
                    label="Your Name"
                    value={formData.name || ''}
                    onChange={this.handleChange}
                    margin="normal"
                    error={!isEmpty(errors.name)}
                    helperText={errors.name}
                />
                <TextField
                    fullWidth
                    required
                    type={'email'}
                    id={"email"}
                    name={"email"}
                    label="Your Email"
                    value={formData.email || ''}
                    onChange={this.handleChange}
                    margin="normal"
                    error={!isEmpty(errors.email)}
                    helperText={errors.email}
                />
                <TextField
                    fullWidth
                    required
                    id={"where"}
                    name={"where"}
                    label="Where is your event ?"
                    value={formData.where || ''}
                    onChange={this.handleChange}
                    margin="normal"
                    error={!isEmpty(errors.where)}
                    helperText={errors.where}
                />
                <TextField
                    fullWidth
                    required
                    type="date"
                    id={"event_date"}
                    name={"event_date"}
                    label="When is your event ?"
                    value={formData.event_date || ''}
                    onChange={this.handleChange}
                    InputLabelProps={{
                        shrink: true
                    }}
                    margin="normal"
                    error={!isEmpty(errors.event_date)}
                    helperText={errors.event_date}
                />
                <TextField
                    fullWidth
                    id={"how_find"}
                    name={"how_find"}
                    label="How did you find me?"
                    value={formData.how_find || ''}
                    onChange={this.handleChange}
                    margin="normal"
                    error={!isEmpty(errors.how_find)}
                    helperText={errors.how_find}
                />
                <TextField
                    required
                    fullWidth
                    multiline
                    rows={2}
                    rowsMax="6"
                    id={"about"}
                    name={"about"}
                    label="Tell me about your event"
                    value={formData.about || ''}
                    onChange={this.handleChange}
                    margin="normal"
                    variant={"outlined"}
                    error={!isEmpty(errors.about)}
                    helperText={errors.about}
                />
                <div className="text-center">
                    <MDBBtn outline color="black" type="submit" disabled={submitted}>
                        Send <MDBIcon far icon="paper-plane" color="black" className="ml-1"/>
                    </MDBBtn>
                </div>
            </form>
        );
    }
}

ContactForm.propTypes = {
    classes: PropTypes.object.isRequired,
    contact: PropTypes.func.isRequired,
};

export default connect(null, {contact})(withStyles(styles)(ContactForm));