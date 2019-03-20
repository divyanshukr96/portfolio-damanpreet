import {combineReducers} from 'redux';
import auth from "./authReducer"
import flashMessageReducer from "./flashMessageReducer";


export default combineReducers({
    auth: auth,
    flashMessage: flashMessageReducer,
})