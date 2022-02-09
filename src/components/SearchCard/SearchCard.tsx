import React, {useMemo} from 'react';

import {Button} from '../Button';
import {Column} from '../Column';
import {Row} from '../Row';
import {Text} from '../Text';
import {Card} from '../Card';

import {setStorageArrayData} from '../../utils/storage';
import {getNormalizeCountryNames} from '../../utils/normalizers';

import {CitiesProps, CitiesStored} from '../../shared/interfaces';

interface SearchCardProps {
  data?: CitiesProps;
  citiesDataStored?: CitiesStored[] | null;
}

const SearchCard: React.FC<SearchCardProps> = ({data, citiesDataStored}) => {
  const addNewCityHandler = () => {
    if (!data) {
      return;
    }

    const payload = {
      latitude: data?.latitude,
      longitude: data?.longitude,
      cityID: data?.id,
    };
    setStorageArrayData('@cities', payload);
  };

  const alreadyCityAdded = useMemo(() => {
    if (!data || !citiesDataStored) {
      return false;
    }

    const foundCity = citiesDataStored?.find(
      (city: any) => city.cityID === data?.id,
    );

    return !!foundCity;
  }, [data, citiesDataStored]);

  return (
    <Card>
      <Column width={1}>
        <Row width={1}>
          <Text fontSize={24} color="black" letterSpacing={0.25}>
            {data?.name}
          </Text>
        </Row>
        <Row width={1} mt="2px">
          <Text fontSize={14} color="black" letterSpacing={0.25}>
            {getNormalizeCountryNames(data?.countryCode)}
          </Text>
        </Row>
      </Column>
      <Row width={1}>
        {!!alreadyCityAdded ? (
          <Row width={120} py="8px" height={40} justifyContent="center">
            <Text
              fontSize={13}
              color="silver"
              fontFamily="Roboto-Medium"
              letterSpacing={1}>
              ADICIONADO
            </Text>
          </Row>
        ) : (
          <Button
            width={120}
            height={40}
            backgroundColor="transparent"
            onPress={addNewCityHandler}>
            <Text
              fontSize={13}
              color="cerulean"
              fontFamily="Roboto-Medium"
              letterSpacing={1}>
              ADICIONAR
            </Text>
          </Button>
        )}
      </Row>
    </Card>
  );
};

export default SearchCard;
