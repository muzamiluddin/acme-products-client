import axios from "axios";

const client = (token = null) => {
  const defaultOptions = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const getURL = (url) => {
    return url;
  };

  return {
    get: (url, options = {}) =>
      axios.get(getURL(url), { ...defaultOptions, ...options }),
    post: (url, data, options = {}) =>
      axios.post(getURL(url), data, { ...defaultOptions, ...options }),
    put: (url, data, options = {}) =>
      axios.put(getURL(url), data, { ...defaultOptions, ...options }),
    delete: (url, options = {}) =>
      axios.delete(getURL(url), { ...defaultOptions, ...options }),
  };
};

const request = client("MY SECRET TOKEN");
export default request;
