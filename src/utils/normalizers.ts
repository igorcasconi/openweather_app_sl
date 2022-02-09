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

export const capitalizeFirstLetter = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1);
