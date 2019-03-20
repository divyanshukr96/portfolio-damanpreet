import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Route} from "react-router-dom";
import AdminDashboard from "../components/Dashboard/AdminDashboard";
// import Home from "../components/Dashboard/Home";


class AdminRoute extends Component {
    constructor(props) {
        super(props);
        if (!props.isAuthenticated) {
            props.history.push('/login')
        }
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        if (!nextProps.isAuthenticated) {
            nextProps.history.push('/login')
        }
    }

    render() {
        const match = this.props.match.path;
        return (
            <React.Fragment>
                <AdminDashboard>
                    {/* <Route exact path={`${match}`} component={Home}/> */}

                </AdminDashboard>
            </React.Fragment>
        );
    }
}


AdminRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    userType: PropTypes.string
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    userType: state.auth.user.type
});

export default connect(mapStateToProps)(AdminRoute);