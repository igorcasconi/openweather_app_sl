import {api} from '../providers';
import Config from 'react-native-config';

export const getCitiesByName = ({city}: {city: string}) =>
  api.get(`weather?q=${city}&appid=${Config.KEY_OPENWEATHER}`);
