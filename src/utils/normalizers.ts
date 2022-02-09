import {countriesData} from './constants';

export const getNormalizeCountryNames = (countryCode?: string) => {
  if (!countryCode) {
    return;
  }

  const countryNormalized = countriesData?.find(
    country => country.code === countryCode,
  );

  return countryNormalized?.name;
};
