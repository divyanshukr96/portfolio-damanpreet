import React from 'react';
import {Parallax} from 'react-parallax';
import * as PropTypes from "prop-types";
import {isEmpty} from "lodash";

const Description = (props) => (
    <div style={{maxHeight: '90vh', overflow: 'hidden'}}>
        <Parallax
            blur={{min: 0, max: 10}}
            bgImage={`/image/${props.data.photo}`}
            bgImageAlt="the car"
            strength={1000}
        >
            <div className="description">
                <p>{props.data.description}</p>
            </div>
        </Parallax>
    </div>
);

const Cover = (props) => (
    <Parallax
        bgImage={`/image/${props.data.photo}`}
        strength={400}
        renderLayer={percentage => (
            <div
                style={{
                    color: 'white',
                    position: 'absolute',
                    background: `rgba(0, 0, 0, ${percentage * 1})`,
                    right: 0,
                    bottom: '10%',
                    transform: 'translateX(-5%)',
                    width: percentage * 500 + 350,
                    maxWidth: '100%',
                    overflow: 'hidden',
                }}
            >
                <div style={{display: 'inline-block', padding: '5% 10%', overflow: 'hidden'}}>
                    <span>{props.data.about}</span>
                </div>
            </div>

        )}
    >
        <div style={{height: '65vh'}}/>
    </Parallax>
);

const ParallaxEffect = (props) => {
    const {cover, description} = props;
    return (
        <div>
            {!isEmpty(description) && <Description data={description}/>}

            {/* -----renderProp: "renderLayer"-----*/}
            {!isEmpty(cover) && <Cover data={cover}/>}

        </div>
    );
};

ParallaxEffect.propTypes = {
    cover: PropTypes.object.isRequired,
    description: PropTypes.object.isRequired,
};

ParallaxEffect.defaultProps = {
    cover: {},
    description: {},
};

export default ParallaxEffect;