import axios, {AxiosInstance} from 'axios';


/**
 * Axios instance for making HTTP requests.
 */
export const axiosBase: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});