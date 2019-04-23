import React, {Component} from "react";
import '../App.css'

import ImageSlider from './ImageSlider';
import ImageAndData from './ImageAndData';
import ParallaxEffect from './ParallaxEffect';
import Footer from './Footer';
import axios from 'axios';
import Navbar from './Navbar';

import LighboxPage from './LightBoxPage';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }


    componentWillMount() {
        axios.get('/api/home').then(res => {
            this.setState({data: res.data})
        })
    }

    render() {
        const {data} = this.state;
        return (
            <div className="App">




                <Navbar/>

                <ImageSlider carousel={data.carousel}/>

                <ParallaxEffect cover={data.cover} description={data.description}/>

                <br/>
                <br/>

                {/*<ParallaxTest/>*/}

              <ImageAndData image={data.layout}/>

              <LighboxPage gallery={data.gallery}/>

              <Footer/>


          </div>
        );
    }
}

Home.propTypes = {
    
};

export default Home;