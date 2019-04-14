import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import routes from "./routes/index"
import store from "./store/configureStore";
import Provider from "react-redux/es/components/Provider";
import NetworkService from "./utils/networkService"
import {createBrowserHistory} from 'history';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


const history = createBrowserHistory();
NetworkService.setupInterceptors(store, history);
ReactDOM.render(
    <Provider store={store}>
        <Router history={history} children={routes}/>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

serviceWorker.unregister();
