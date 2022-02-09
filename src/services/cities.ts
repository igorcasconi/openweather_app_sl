import {apiCities} from '../providers';
import {ArrayCitiesProps} from '../shared/interfaces';

export const getCitiesByName = ({city}: {city: string}) =>
  apiCities.get<ArrayCitiesProps>(
    `geo/cities?namePrefix=${city}&types=CITY&limit=10`,
  );
