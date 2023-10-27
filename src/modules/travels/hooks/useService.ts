import axios, { AxiosPromise } from 'axios';
import api from '../services/api';

export function useService() {
    const auth = '';
    const apiURL = process.env.EXPO_PUBLIC_API_URL_LOCAL;

    async function get(url: string, data: any, query: string): AxiosPromise {
        return api.get(`${url}${query}`, {
            data,
            headers: {
                Authorization: `Bearer ${auth}`
            }
        })
    }

    async function post(url: string, data: any): AxiosPromise {
        return api.post(url, data, {
            headers: {
                Authorization: `Bearer ${auth}`
            }
        })
    }

    function put(url: string, data: any): AxiosPromise {
        return api.put(url, data, {
            headers: {
                Authorization: `Bearer ${auth}`
            }
        })
    }

    return {
        get,
        post,
        put
    }
}