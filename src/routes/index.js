import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from "../App";
import Home from "../components/Home";
import MainGallery from '../components/MainGallery';
import About from '../components/About';
import ContactUs from "../components/ContactUs";


const routes = (
    <Router>
        <App>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/gallery" component={MainGallery}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={ContactUs}/>
            </Switch>
        </App>
    </Router>
);

export default routes;