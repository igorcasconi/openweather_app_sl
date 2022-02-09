import {apiWeather} from '../providers';
import Config from 'react-native-config';
import {CurrentWeatherDataProps} from '../shared/interfaces';

export const getCitiesByDistance = ({city}: {city: string}) =>
  apiWeather.get<CurrentWeatherDataProps>(
    `weather?q=${city}&appid=${Config.KEY_OPENWEATHER}&lang=pt_br&units=metric`,
  );
