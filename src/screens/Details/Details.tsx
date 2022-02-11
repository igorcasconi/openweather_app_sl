import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import {useQuery} from 'react-query';

import {Column, ForecastCard, Row, Text} from '../../components';
import {weatherRouteStack} from '../../navigators/NavigationRoutes';
import {getForecastCity} from '../../services';
import DeleteButton from './DeleteButton';

import {ForecastItemCity} from '../../shared/interfaces';
import {RouteStackParamsProps} from '../../shared/types/routes';
import useColors from '../../hooks/useColors';

const Details: React.FC = () => {
  const route = useRoute<RouteProp<RouteStackParamsProps, 'Details'>>();
  const {data: cityData} = route.params;
  const getThemeColors = useColors();
  const navigation = useNavigation<weatherRouteStack>();
  const {data: forecastData, isLoading: isGettingForecast} = useQuery(
    ['forecastDataGetter', cityData],
    () =>
      getForecastCity({
        latitude: cityData?.coord.lat,
        longitude: cityData?.coord.lon,
      }),
  );

  useEffect(() => {
    navigation.setOptions({
      headerTitle: cityData?.name,
      headerRight: () => <DeleteButton cityStoreID={cityData?.cityID} />,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderForecastCity = ({item}: {item: ForecastItemCity}) => (
    <ForecastCard data={item} timezone={forecastData?.timezone_offset} />
  );

  return isGettingForecast ? (
    <Column width={1} height="100%" justifyContent="center" flex={1}>
      <ActivityIndicator color={getThemeColors('azure')} size="large" />
    </Column>
  ) : (
    <Column width={1} flex={1} height="100%" px={16} pb={20} mb={30}>
      <Row width={1} mt={16} justifyContent="center" mb={16}>
        <Text fontSize={14} color="black" letterSpacing={0.4}>
          Previsão para os próximos 7 dias
        </Text>
      </Row>
      <Row width={1} height="100%" mb={40}>
        {!!forecastData?.daily.length && (
          <FlatList
            data={forecastData?.daily}
            keyExtractor={(item: ForecastItemCity, index: number) =>
              `${item.dt}-${index}`
            }
            renderItem={renderForecastCity}
            showsVerticalScrollIndicator={false}
          />
        )}
      </Row>
    </Column>
  );
};

export default Details;
