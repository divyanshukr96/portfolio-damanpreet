import React from "react";
import {Parallax} from "react-parallax"
import {MDBContainer} from 'mdbreact';
import Image1 from './../images/DSC01871.jpg';



const styles = {
    fontFamily: "sans-serif",
    /*textAlign: "center"*/
};
const insideStyles = {
    background: "white",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
};
const parastyle={
    padding:20,
    position:"absolute",
    top:"50%",
    left:"50%",
}
const image1 =
    "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
const image2 =
    "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
const image3 =
    "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
const image4 =
    "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";

const parallaxTest = () => (
    <div >



        <Parallax bgImage={Image1} strength={500}>

            <MDBContainer style={{height:500}}>

                <span className="white-text align-bottom" >
                    Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum.
                    Donec sed odio operae,
                    eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis
                    piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium
                    purus sit amet fermentum.
                </span>

            </MDBContainer>

        </Parallax>

        <h1>| | |</h1>
        <Parallax
            bgImage={image4}
            strength={200}
            renderLayer={percentage => (
                <div>
                    <div
                        style={{
                            position: "absolute",
                            background: `rgba(255, 125, 0, ${percentage * 1})`,
                            left: "50%",
                            top: "50%",
                            borderRadius: "50%",
                            transform: "translate(-50%,-50%)",
                            width: percentage * 500,
                            height: percentage * 500
                        }}
                    />

                </div>
            )}
        >
            <div style={{ height: 500 }}>
               {/* <div style={insideStyles}>Lorem ipsum dolor sit amet, consectetur adipisicing elit</div>*/}
            </div>
        </Parallax>
        <div style={{ height: 500 }} />
        <h2>{"\u2728"}</h2>
    </div>
);

export default parallaxTest;


