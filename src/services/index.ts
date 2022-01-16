import axios, { AxiosResponse } from 'axios';

const Axios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: null,
  timeout: 15000,
});

const resData = (res: AxiosResponse) => res.data?.data;

const $api = {
  get: (path: string) => Axios.get(path).then(resData),
  post: (path: string, body) => Axios.post(path, body).then(resData),
  put: (path: string, body) => Axios.put(path, body).then(resData),
  delete: (path: string) => Axios.delete(path).then(resData),
};
