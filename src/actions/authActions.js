import axios from "axios";
import * as types from "./actionTypes";
import jwtDecode from 'jwt-decode';
import SetAuthorizationToken from "../utils/setAuthorizationToken";
import {addFlashMessage} from "./flashMessageActions";

export const setCurrentUser = user => {
    return {
        type: types.SET_CURRENT_USER,
        user
    }
};

export const login = data => async dispatch => {
    try {
        const result = await axios.post('/api/user/login', data);
        const token = result.data.token;
        localStorage.setItem('token', token);
        SetAuthorizationToken(token);
        dispatch(setCurrentUser(jwtDecode(token)));
        dispatch(addFlashMessage({
            message: 'You are Successfully Logged-in ...',
            options: {variant: 'success'}
        }));
        return {
            response: result
        };
    } catch (err) {
        const res = err.response;
        if (!res){
            dispatch(addFlashMessage({
                message: "No internet connection . . .",
                options: {variant: 'warning'}
            }));
            return {};
        }
        if (res.data.error) {
            dispatch(addFlashMessage({
                message: err.response.data.error,
                options: {variant: 'warning'}
            }));
        }
        return {
            errors: err.response
        };
    }
};

export const logout = () => dispatch => {
    localStorage.removeItem('token');
    SetAuthorizationToken(false);
    dispatch(setCurrentUser({}));
    dispatch(addFlashMessage({
        message: 'You are Successfully Logged-out ...',
        options: {variant: 'success'}
    }))
};

