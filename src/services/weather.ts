import {apiWeather} from '../providers';
import Config from 'react-native-config';
import {CurrentWeatherDataProps} from '../shared/interfaces';

export const getCitiesByDistance = ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) =>
  apiWeather.get<CurrentWeatherDataProps>(
    `weather?lat=${latitude}&lon=${longitude}&appid=${Config.KEY_OPENWEATHER}&lang=pt_br&units=metric`,
  );
