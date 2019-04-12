import React from "react";
import {Link} from "react-router-dom";
import Logo from './../images/hsnlogo1.png';

export default () => (

       <div className="bar" style={{marginTop:20}}>

           <Link to={'/'}> <h1 className="cursive">Home</h1> </Link>
           <Link to={'/gallery'}> <h1 className="cursive">Gallery</h1> </Link>

           <img
               src={Logo}
               alt=""
               width={300}
               height={200}
           />

           <Link to={'/about'}> <h1 className="cursive">About</h1> </Link>
           <Link to={'/contact'}> <h1 className="cursive">Contact</h1> </Link>
       </div>

);