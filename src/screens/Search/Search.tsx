import React, {useEffect, useMemo, useState} from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import {useMutation} from 'react-query';
import {useDebouncedCallback} from 'use-debounce';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Button, Column, Input, Row, SearchCard, Text} from '../../components';
import {getCitiesByName} from '../../services';
import useColors from '../../hooks/useColors';

import {CitiesProps, CitiesStored} from '../../shared/interfaces';
import {getDataStorage} from '../../utils/storage';

const Search: React.FC = () => {
  const getThemeColors = useColors();
  const [isEmptySearch, setEmptySearch] = useState<boolean>(true);
  const [citiesDataStored, setCitiesStored] = useState<
    CitiesStored[] | null | undefined
  >(null);

  const {
    mutateAsync: mutateCities,
    isLoading: isFindingCity,
    data: citiesData,
  } = useMutation(getCitiesByName);

  const handleInputChange = useDebouncedCallback(async (value: string) => {
    if (!value) {
      return setEmptySearch(true);
    }
    await mutateCities({city: value});
    setEmptySearch(false);
  }, 1000);

  const informationText = useMemo(
    () =>
      isEmptySearch
        ? 'Digite no campo acima para buscar a cidade desejada!'
        : 'Não foi encontrada nenhuma cidade!',
    [isEmptySearch],
  );

  const getCitiesStored = async () => {
    try {
      const cities = await getDataStorage<CitiesStored[]>('@cities');
      setCitiesStored(cities);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCitiesStored();
  }, []);

  const renderCityItem = ({item: data}: {item: CitiesProps}) => (
    <SearchCard data={data} citiesDataStored={citiesDataStored} />
  );

  return (
    <Column width={1} height="100%" flex={1}>
      <Row
        width={1}
        height={60}
        backgroundColor="azure"
        px={10}
        alignItems="center">
        <Button width={40} height={40} backgroundColor="azure">
          <MaterialCommunityIcons name="close" color="white" size={20} />
        </Button>
        <Input
          onChangeText={handleInputChange}
          placeholder="digite para encontrar a cidade"
          placeholderTextColor={getThemeColors('extraLightGray')}
        />
      </Row>
      <Column width={1} height="100%" backgroundColor="gray" py={16} px={16}>
        {isFindingCity ? (
          <Row
            width={1}
            height="100%"
            alignItems="center"
            justifyContent="center">
            <ActivityIndicator size="large" color={getThemeColors('azure')} />
          </Row>
        ) : !!citiesData?.data.length ? (
          <Column width={1} height="100%" flex={1} mb={40}>
            <FlatList
              data={citiesData?.data}
              keyExtractor={(item: CitiesProps, index: number) =>
                `${item.id}-${index}`
              }
              renderItem={renderCityItem}
              showsVerticalScrollIndicator={false}
            />
          </Column>
        ) : (
          <Row width={1} height="100%" justifyContent="center" pt={60} px={30}>
            <Text fontSize={18} color="black" textAlign="center">
              {informationText}
            </Text>
          </Row>
        )}
      </Column>
    </Column>
  );
};

export default Search;
