import axios, {AxiosInstance} from 'axios';

export const axiosBase: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});