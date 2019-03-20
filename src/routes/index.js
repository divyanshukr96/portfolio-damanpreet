import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from "../App";
import Home from "../components/Home";

import AdminRoute from "./admin";

const routes = (
    <Router>
        <App>
            <Switch>
                <Route exact path="/" component={Home}/>
                
                <Route path="/dashboard" component={AdminRoute}/>
                
            </Switch>
        </App>
    </Router>
);

export default routes;