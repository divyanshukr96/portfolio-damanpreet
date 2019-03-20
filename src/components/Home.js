import React, {Component} from "react";
import * as PropTypes from "prop-types";
import logo from '../logo.svg'
import '../App.css'

class Home extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        );
    }
}

Home.propTypes = {
    
};

export default Home;