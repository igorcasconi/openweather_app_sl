import axios from 'axios';
import Config from 'react-native-config';

const apiWeather = axios.create({
  baseURL: Config.API_URL,
});

apiWeather.interceptors.request.use(async ({headers, ...config}) => {
  return {
    ...config,
    headers: {
      ...headers,
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };
});

apiWeather.interceptors.response.use(
  response => response?.data,
  err => Promise.reject(err?.response?.data),
);

export default apiWeather;
