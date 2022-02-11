import {apiWeather} from '../providers';
import Config from 'react-native-config';
import {
  CurrentWeatherDataProps,
  ForecastCitiesProps,
} from '../shared/interfaces';

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

export const getForecastCity = ({
  latitude,
  longitude,
}: {
  latitude?: number;
  longitude?: number;
}) =>
  apiWeather.get<ForecastCitiesProps>(
    `onecall?lat=${latitude}&lon=${longitude}&appid=${Config.KEY_OPENWEATHER}&exclude=hourly,minutely,alerts,current&lang=pt_br&units=metric`,
  );
