import React from 'react';
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

import {CurrentWeatherDataProps} from '../../shared/interfaces';

interface WeatherCardProps {
  data?: CurrentWeatherDataProps;
}

const WeatherCard: React.FC<WeatherCardProps> = ({data}) => {
  const getThemeColors = useColors();
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
        <Column mt={-10} mr={16}>
          <AntDesign
            name="hearto"
            color={getThemeColors('redRibbon')}
            size={25}
          />
        </Column>
      </Row>
    </Card>
  );
};

export default WeatherCard;
