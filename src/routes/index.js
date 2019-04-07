import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from "../App";
import Home from "../components/Home";
import MainGallery from '../components/MainGallery';
import AdminRoute from "./admin";
import About from '../components/About';


const routes = (
    <Router>
        <App>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/dashboard" component={AdminRoute}/>
                <Route path="/gallery" component={MainGallery}/>
                <Route path="/about" component={About}/>
             {/*   <Route path="/contactform" component={ContactForm}/>*/}
            </Switch>
        </App>
    </Router>
);

export default routes;