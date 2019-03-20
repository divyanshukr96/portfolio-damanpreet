import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers"
import {composeWithDevTools} from "redux-devtools-extension/developmentOnly";
import SetAuthorizationToken from "../utils/setAuthorizationToken";
import {setCurrentUser} from "../actions/authActions";
import jwtDecode from 'jwt-decode';

const initialState = {};

const middleware = [thunk];

const token = localStorage.token;

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(...middleware),
    )
);

if (token) {
    SetAuthorizationToken(token);
    store.dispatch(setCurrentUser(jwtDecode(token)));
}

SetAuthorizationToken(token);

export default store;