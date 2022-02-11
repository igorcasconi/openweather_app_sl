import {CurrentWeatherDataProps} from '../interfaces';

export type RouteStackParamsProps = {
  Cities: {
    shouldUpdateList?: boolean;
    removedCityID?: number;
  };
  Search: undefined;
  Details: {data?: CurrentWeatherDataProps; cityID?: number | null};
};
