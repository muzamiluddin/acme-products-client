import axios from 'axios';

const baseURL = 'http://localhost:3004';

const client = (token = null) => {
    const defaultOptions = {
        headers: {
            // baseURL: 'process.env.REACT_APP_API_PATH' TO BE REPLACED WITH THIS
            headers: {
              'Content-Type': 'application/json',
            },
        },
    };

    const getURL = (url) => {
        return baseURL + url;
    }

    return {
        get: (url, options = {}) => axios.get(getURL(url), { ...defaultOptions, ...options }),
        post: (url, data, options = {}) => axios.post(getURL(url), data, { ...defaultOptions, ...options }),
        put: (url, data, options = {}) => axios.put(getURL(url), data, { ...defaultOptions, ...options }),
        delete: (url, options = {}) => axios.delete(getURL(url), { ...defaultOptions, ...options }),
    };
};

const request = client('MY SECRET TOKEN');
export default request;
