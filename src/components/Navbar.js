import React, {Component} from "react";
import {Link} from "react-router-dom";
import Logo from './../images/hsnlogo1.png';
import '../menu.css'

class NavBar extends Component {
    menuChange = () => {
        let menuIcon = document.getElementById('menuIcon');
        let menu = document.getElementById('menu');
        menuIcon.classList.toggle("change");
        menu.classList.toggle("mobile");
    };

    render() {
        return (
            <div className="barOuter">
                <div className="logo"><img src={Logo} alt="logo" style={{width: '100%'}}/></div>
                <div className="menuContainer" id="menuIcon" onClick={this.menuChange}>
                    <div className="bar1"/>
                    <div className="bar2"/>
                    <div className="bar3"/>
                </div>
                <div className="bar mobile" id="menu">
                    <Link to={'/'}><h1 className="cursive">Home</h1></Link>
                    <Link to={'/gallery'}><h1 className="cursive">Gallery</h1></Link>
                    <Link to={'/'}><h1 className="cursive" style={{display: 'none'}}>nul</h1></Link>
                    <Link to={'/about'}><h1 className="cursive">About</h1></Link>
                    <Link to={'/contact'}><h1 className="cursive">Contact</h1></Link>
                </div>
            </div>
        );
    }
}

export default NavBar;