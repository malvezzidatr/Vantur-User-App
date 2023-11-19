import { AxiosPromise } from 'axios';
import api from '../services/api';
import * as SecureStore from 'expo-secure-store';

export function useService() {
  async function get(
    url: string,
    data: any,
    query: string,
  ): Promise<AxiosPromise> {
    const auth = await SecureStore.getItemAsync('access_token');
    return api.get(`${url}${query}`, {
      data,
      headers: {
        Authorization: `Bearer ${auth}`,
      },
    });
  }

  async function post(url: string, data: any): Promise<AxiosPromise> {
    const auth = await SecureStore.getItemAsync('access_token');
    return api.post(url, data, {
      headers: {
        Authorization: `Bearer ${auth}`,
      },
    });
  }

  async function put(url: string, data: any): Promise<AxiosPromise> {
    const auth = await SecureStore.getItemAsync('access_token');
    return api.put(url, data, {
      headers: {
        Authorization: `Bearer ${auth}`,
      },
    });
  }

  return {
    get,
    post,
    put,
  };
}
