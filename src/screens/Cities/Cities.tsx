import React, {useEffect, useState} from 'react';
import {useMutation} from 'react-query';
import {ActivityIndicator, FlatList} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

import {Column, Row, Text, WeatherCard} from '../../components';
import useColors from '../../hooks/useColors';
import {getCitiesByDistance} from '../../services';
import {weatherRouteStack} from '../../navigators/NavigationRoutes';

import {
  CitiesStored,
  CurrentWeatherDataProps,
  FavoriteCitiesProps,
} from '../../shared/interfaces';
import {RouteStackParamsProps} from '../../shared/types/routes';
import {setItemToTopArray} from '../../utils/ArraysAndObjects';
import useDataStorage from '../../hooks/useDataStorage';

const Cities: React.FC = () => {
  const route = useRoute<RouteProp<RouteStackParamsProps, 'Cities'>>();
  const navigation = useNavigation<weatherRouteStack>();
  const [weatherCities, setWeatherCities] = useState<CurrentWeatherDataProps[]>(
    [],
  );
  const [isClickedLike, setClickLike] = useState<boolean>(false);
  const {mutateAsync: mutateWeatherCities, isLoading: isGettingWeather} =
    useMutation(getCitiesByDistance);
  const getThemeColors = useColors();
  const {favoriteCities, citiesAdded} = useDataStorage(
    isClickedLike,
    route.params?.shouldUpdateList,
  );

  const clearParams = () => {
    navigation.setParams({shouldUpdateList: false});
  };

  const cityHasLoaded = (city: CitiesStored) => {
    if (!weatherCities.length) {
      return false;
    }

    const foundCity = weatherCities.find(weatherCity => {
      return (
        weatherCity.coord.lat === city.latitude &&
        weatherCity.coord.lon === city.longitude
      );
    });
    return !!foundCity;
  };

  const getWeatherCities = async (city: CitiesStored) => {
    try {
      const foundCity = cityHasLoaded(city);
      if (foundCity) {
        return;
      }

      const weatherCityData = await mutateWeatherCities({
        latitude: city.latitude,
        longitude: city.longitude,
      });
      setWeatherCities(cities => [...cities, weatherCityData]);
      route.params?.shouldUpdateList && clearParams();
    } catch (err) {
      console.log(err);
    }
  };

  const reorderCitiesByLike = async (
    favoriteCitiesData?: FavoriteCitiesProps[],
  ) => {
    if (!favoriteCitiesData) {
      return;
    }

    favoriteCitiesData?.forEach(favoriteCity => {
      const reorderWeatherCities = setItemToTopArray(
        weatherCities,
        favoriteCity.cityID,
        'id',
      );
      reorderWeatherCities && setWeatherCities(reorderWeatherCities);
    });
    setClickLike(false);
  };

  useEffect(() => {
    if (!citiesAdded) {
      return;
    }

    citiesAdded.forEach(city => getWeatherCities(city));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [citiesAdded]);

  useEffect(() => {
    if (!favoriteCities) {
      return;
    }

    reorderCitiesByLike(favoriteCities);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favoriteCities]);

  const renderWeatherCity = ({item}: {item: CurrentWeatherDataProps}) => (
    <WeatherCard data={item} setClickLike={setClickLike} />
  );

  if (isGettingWeather) {
    return (
      <Column width={1} height="100%" flex={1} justifyContent="center">
        <ActivityIndicator color={getThemeColors('azure')} size="large" />
      </Column>
    );
  }

  return !!weatherCities?.length ? (
    <Column width={1} flex={1} mb={10} p={16}>
      <FlatList
        data={weatherCities}
        keyExtractor={(item: CurrentWeatherDataProps, index: number) =>
          `${item.id}-${index}`
        }
        renderItem={renderWeatherCity}
        showsVerticalScrollIndicator={false}
      />
    </Column>
  ) : (
    <Column flex={1} backgroundColor="gray" height="100%" width={1}>
      <Row width={1} mt={60} px={55} justifyContent="center">
        <Text fontSize={18} fontFamily="Roboto-Bold" textAlign="center">
          Parece que você ainda não adicionou uma cidade
        </Text>
      </Row>
      <Row width={1} px={16} mt={16} justifyContent="center">
        <Text fontSize={16} textAlign="center">
          Tente adicionar uma cidade usando o botão de busca
        </Text>
      </Row>
    </Column>
  );
};

export default Cities;
