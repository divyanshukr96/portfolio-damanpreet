import axios from "axios";
import {setCurrentUser} from "../actions/authActions";
import {addFlashMessage} from "../actions/flashMessageActions";

if (process.env.NODE_ENV !== 'production') {
    // axios.defaults.baseURL = "http://10.1.130.32:81";

    axios.defaults.baseURL = "http://127.0.0.1:8000";

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
                case 409:
                    store.dispatch(addFlashMessage({
                        message: 'Form Submission failed !!',
                        options: {variant: 'warning'}
                    }));
                    setTimeout(() => window.location.reload(true), 3000);
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