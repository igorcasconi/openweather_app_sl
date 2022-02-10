import {useEffect, useState} from 'react';

import {getDataStorage} from '../utils/storage';
import {CitiesStored, FavoriteCitiesProps} from '../shared/interfaces';

const useDataStorage = (
  isClickedLike?: boolean,
  shouldUpdateList?: boolean,
) => {
  const [citiesAdded, setCities] = useState<CitiesStored[] | null>(null);
  const [favoriteCities, setFavoriteCities] = useState<FavoriteCitiesProps[]>(
    [],
  );
  const getCitiesStored = async () => {
    try {
      const cities = await getDataStorage<CitiesStored[]>('@cities');
      setCities(cities);
    } catch (err) {
      console.log(err);
    }
  };

  const getFavoriteCities = async () => {
    try {
      const favoriteCitiesStorage = await getDataStorage<FavoriteCitiesProps[]>(
        '@favorite_cities',
      );
      setFavoriteCities(favoriteCitiesStorage);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCitiesStored();
  }, [shouldUpdateList]);

  useEffect(() => {
    if (!isClickedLike) {
      return;
    }

    getFavoriteCities();
  }, [isClickedLike]);

  return {getCitiesStored, getFavoriteCities, citiesAdded, favoriteCities};
};

export default useDataStorage;
