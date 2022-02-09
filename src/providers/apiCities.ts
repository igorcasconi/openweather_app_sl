import axios from 'axios';
import Config from 'react-native-config';

const apiCities = axios.create({
  baseURL: Config.API_CITIES_URL,
});

apiCities.interceptors.request.use(async ({headers, ...config}) => {
  return {
    ...config,
    headers: {
      ...headers,
      'Content-Type': 'application/json; charset=UTF-8',
      'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
      'x-rapidapi-key': Config.KEY_GEODB,
    },
  };
});

apiCities.interceptors.response.use(
  response => response?.data,
  err => Promise.reject(err?.response?.data),
);

export default apiCities;
