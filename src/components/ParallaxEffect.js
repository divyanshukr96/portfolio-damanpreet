import React from 'react';
import { Parallax, Background } from 'react-parallax';
import Image1 from './../images/logo.jpg';
import Image2 from './../images/DSC_1246.jpg'


const ParallaxEffect = () => (
    <div>
        {/* -----basic config-----*/}
      {/*  <Parallax
            blur={0}
            bgImage={Image1}
            bgImageAlt="the car"
            strength={100}
        >
            <div style={{ height: '800px' }} />
        </Parallax>*/}



        {/* -----dynamic blur-----*/}
        <Parallax
            blur={{ min:0, max:10 }}
            bgImage={Image1}
            bgImageAlt="the car"
            strength={1000}
        >

            <div style={{ height:'700px'}} >
                <p style={{color:'white',marginTop:'400px',fontFamily:'courier',fontSize:'150%'}}>
                    something i need about the site comes herjalksdfj ;askdfj
                </p>
            </div>
        </Parallax>

        {/* -----custom background element-----*/}
     {/*   <Parallax strength={300}>
            <div style={{height:700}}>Use the background component for custom elements</div>
            <Background className="custom-bg">
                <img src="http://www.fillmurray.com/500/320" alt="fill murray" />
            </Background>
        </Parallax>
*/}

        {/* -----renderProp: "renderLayer"-----*/}
        <Parallax//this one comes in the center somewhere
            bgImage={Image2}
            strength={400}
            renderLayer={percentage => (
                <div
                    style={{
                        color:'white',
                        position: 'absolute',
                        background: `rgba(0, 123, 255, ${percentage * 1})`,
                        left: '50%',
                        top: '50%',
                        width: percentage * 500,
                        height: percentage * 500,
                    }}
                >
                   <span style={{display:'inline-block',marginTop:'90px'}}>something short comes here..maybe a quote</span>
                </div>

            )}
        >
            <div style={{height:500}}>

            </div>
        </Parallax>

    </div>
);
export default ParallaxEffect;