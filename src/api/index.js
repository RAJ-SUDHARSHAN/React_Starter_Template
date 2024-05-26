import axios from "axios";

export const baseURL = process.env.REACT_APP_BASE_URL

const version = "v1";

const api = axios.create({
    baseURL: `${baseURL}/api/${version}`
});

export default api;