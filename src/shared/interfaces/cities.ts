export interface CitiesProps {
  id: number;
  wikiDataId: string;
  type: string;
  city: string;
  name: string;
  country: string;
  countryCode: string;
  region: string;
  regionCode: string;
  latitude: number;
  longitude: number;
  population: number;
}

export interface ArrayCitiesProps {
  data: Array<CitiesProps>;
}

export interface CitiesStored {
  cityID: number;
  latitude: number;
  longitude: number;
  name: string;
}
