import axios from "axios";
import {addFlashMessage} from "./flashMessageActions";

export const contact = formData => async dispatch => {
    try {
        const result = await axios.post('/api/contact', formData);
        dispatch(addFlashMessage({
            message: 'You form is Successfully submitted ...',
            options: {variant: 'success'}
        }));
        return {
            response: result
        };
    } catch (err) {
        const res = err.response;
        if (res && res.data && res.data.errors) {
            return {
                errors: res.data.errors
            };
        }
        return {
            errors: {}
        };
    }
};

