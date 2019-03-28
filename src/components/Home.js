import React, {Component} from "react";
import * as PropTypes from "prop-types";
import logo from '../logo.svg'
import '../App.css'

import ImageSlider from './ImageSlider';
import ParallaxTest from './ParallaxTest';
import ImageAndData from './ImageAndData';
import {MDBContainer} from "mdbreact";
import {Parallax} from 'react-parallax';
import ParallaxEffect from './ParallaxEffect';
import Footer from './Footer';
import AnimationPage from './AnimationPage';
import Navbar from './Navbar';

import LighboxPage from './LightBoxPage';

const image1 =
    "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
class Home extends Component {


    render() {
        const {classes} = this.props;
        return (
            <div className="App">

                {/*<Navbar/>*/}

                <ImageSlider/>

                <ParallaxEffect/>

                <br/>
                <br/>

                {/*<ParallaxTest/>*/}

              <ImageAndData/>

              <LighboxPage/>

              <Footer/>




          </div>
        );
    }
}

Home.propTypes = {
    
};

export default Home;