import axios from "axios";
import {setCurrentUser} from "../actions/authActions";

if (process.env.NODE_ENV !== 'production') {
    // axios.defaults.baseURL = "http://10.1.130.32:81";

      axios.defaults.baseURL = "http://172.20.3.65:8000";
    
    // axios.defaults.baseURL = "http://127.0.0.1:8000";
}

export default {
    setupInterceptors: (store, history) => {
        axios.interceptors.response.use(response => {
            return response;
        }, error => {
            switch (error.response && error.response.status) {
                case 401:
                    localStorage.removeItem('token');
                    store.dispatch(setCurrentUser({}));
                    console.log("Unauthorized");
                    break;
                // case 404:
                //     history.push('/not-found');
                //     break;
                default:
                    return Promise.reject(error);
            }
            return Promise.reject(error);
        });
    },
};