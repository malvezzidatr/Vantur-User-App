import axios from 'axios';

const api = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL_LOCAL,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
});

export default api;