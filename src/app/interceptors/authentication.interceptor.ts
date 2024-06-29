import axios, { AxiosRequestHeaders } from 'axios';

//TODO: this is definitely not the way to create interceptors, look into it

export const instance = axios.create();

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('authenticationToken');
  const tokenType = localStorage.getItem('authenticationTokenType');

  if (!config.headers) config.headers = {} as AxiosRequestHeaders;
  config.headers = {
    ...config.headers,
    Authorization: `${tokenType} ${token}`,
  } as AxiosRequestHeaders;
  return config;
});
