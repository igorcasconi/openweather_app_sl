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

export const capitalizeFirstLetter = (text: string): string =>
  text.charAt(0).toUpperCase() + text.slice(1);

export const parsedDateTZ = (date?: number, timezone?: number) => {
  if (!date || !timezone) {
    return undefined;
  }
  const parsedDate = new Date(date * 1000 + timezone * 1000);
  return parsedDate;
};

export const getNameDayOfWeek = (index: number): string => {
  switch (index) {
    case 0:
      return 'Domingo';
    case 1:
      return 'Segunda-feira';
    case 2:
      return 'Terça-feira';
    case 3:
      return 'Quarta-feira';
    case 4:
      return 'Quinta-feira';
    case 5:
      return 'Sexta-feira';
    case 6:
      return 'Sábado';
    default:
      return '';
  }
};
