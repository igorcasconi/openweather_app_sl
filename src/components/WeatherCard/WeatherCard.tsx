import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {Column} from '../Column';
import {Card} from '../Card';
import {Row} from '../Row';
import {Text} from '../Text';
import {
  capitalizeFirstLetter,
  getNormalizeCountryNames,
} from '../../utils/normalizers';
import useColors from '../../hooks/useColors';

import {
  CurrentWeatherDataProps,
  FavoriteCitiesProps,
} from '../../shared/interfaces';
import {Button} from '../Button';
import {removeDataStorage, setStorageArrayData} from '../../utils/storage';
import useDataStorage from '../../hooks/useDataStorage';

interface WeatherCardProps {
  setClickLike: Dispatch<SetStateAction<boolean>>;
  data?: CurrentWeatherDataProps;
}

const WeatherCard: React.FC<WeatherCardProps> = ({data, setClickLike}) => {
  const getThemeColors = useColors();
  const [likedCity, setLikeCity] = useState<boolean>(false);
  const [initialLoadFavorite, setLoadFavorite] = useState<boolean>(true);
  const {favoriteCities} = useDataStorage(initialLoadFavorite);

  const likeCityHandler = async (liked: boolean) => {
    if (!liked) {
      await removeDataStorage<FavoriteCitiesProps>(
        '@favorite_cities',
        data?.id,
        'cityID',
      );
      setClickLike(true);
      return setLikeCity(false);
    }
    await setStorageArrayData<FavoriteCitiesProps>('@favorite_cities', {
      cityID: data?.id,
    });
    setLikeCity(true);
    setClickLike(true);
  };

  const favoriteCitiesHandler = async () => {
    const foundLikedCity = favoriteCities.find(
      favoriteCity => favoriteCity.cityID === data?.id,
    );
    setLikeCity(!!foundLikedCity);
    setClickLike(!!foundLikedCity);
    setLoadFavorite(false);
  };

  useEffect(() => {
    if (!favoriteCities.length) {
      return;
    }
    favoriteCitiesHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favoriteCities]);

  return (
    <Card height={140}>
      <Row justifyContent="space-between">
        <Column>
          <Row width={1}>
            <Text fontSize={24} color="black" letterSpacing={0.25}>
              {data?.name}
            </Text>
          </Row>
          <Row width={1} mt="2px">
            <Text fontSize={14} color="black" letterSpacing={0.25}>
              {getNormalizeCountryNames(data?.sys.country)}
            </Text>
          </Row>
        </Column>
        <Column>
          <Row width={1} mt={10}>
            <Text fontSize={34} color="orange" letterSpacing={0.25}>
              {data?.main.temp.toFixed(0)}º
            </Text>
          </Row>
        </Column>
      </Row>
      <Row width={1} mt={13}>
        <Text fontSize={14} color="orange" letterSpacing={0.25}>
          {data?.weather[0].description &&
            capitalizeFirstLetter(data?.weather[0].description)}
        </Text>
      </Row>
      <Row width={1} mt="2px" mb={14} justifyContent="space-between">
        <Column>
          <Text fontSize={12} color="black" letterSpacing={0.25}>
            {data?.main.temp_min.toFixed(0)}º - {data?.main.temp_max.toFixed(0)}
            º
          </Text>
        </Column>
        <Column mt={-20} height={60} width={60} mr={10}>
          <Button
            backgroundColor="transparent"
            onPress={() => likeCityHandler(!likedCity)}>
            <AntDesign
              name={likedCity ? 'heart' : 'hearto'}
              color={getThemeColors('redRibbon')}
              size={25}
            />
          </Button>
        </Column>
      </Row>
    </Card>
  );
};

export default WeatherCard;
