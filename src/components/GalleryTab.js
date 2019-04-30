import React from 'react';
import * as PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import axios from "axios";
import ImagesView from "../components/ImagesView";

function TabContainer({children, dir}) {
    return (
        <Typography component="div" dir={dir} style={{padding: 8 * 3}}>
            {children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};

const styles = theme => ({
    root: {
        // backgroundColor: theme.palette.background.paper,
        // width: 500,
        minHeight: '59vh'
    },
    tab: {
        fontFamily: "'Dancing Script', cursive",
        color: '#e0ad5c',
        fontWeight: '600',
        '&:focus': {
            outline: 'none',
        }
    },
    tabIndicator: {
        backgroundColor: '#e0ad5c'
    },
    touchRipple: {
        color: '#e0ad5c',
    },
});

class FullWidthTabs extends React.Component {
    state = {
        value: 'all',
        images: {},
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    componentWillMount() {
        axios.get('/api/gallery').then(res => {
            this.setState({images: res.data})
        })
    }

    render() {
        const {classes, theme} = this.props;
        const {images, value} = this.state;
        const imageKey = Object.keys(images);
        return (
            <div className={classes.root}>
                {imageKey.length > 0 && (
                    <>
                        <AppBar position="static" color="default" elevation={0}>
                            <Tabs
                                value={this.state.value}
                                onChange={this.handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                                variant="fullWidth"
                                TabIndicatorProps={{
                                    classes: {root: classes.tabIndicator}
                                }}
                            >
                                {imageKey.map(e => (
                                    <Tab value={e} key={e}
                                         label={images[e].name}
                                         className={classes.tab}
                                         TouchRippleProps={{classes: {root: classes.touchRipple}}}
                                    />
                                ))}

                            </Tabs>
                        </AppBar>

                        <TabContainer dir={theme.direction}>
                            {images[value] ? (<ImagesView images={images[value].images}/>) : null}
                        </TabContainer>
                    </>
                )}
            </div>
        );
    }
}

FullWidthTabs.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(FullWidthTabs);