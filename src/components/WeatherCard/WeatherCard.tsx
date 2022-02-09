import React from 'react';
import {CurrentWeatherDataProps} from '../../shared/interfaces';
import {Column} from '../Column';
import {Card} from '../Card';

interface WeatherCardProps {
  data?: CurrentWeatherDataProps;
}

const WeatherCard: React.FC<WeatherCardProps> = () => {
  return (
    <Card>
      <Column width={1} />
    </Card>
  );
};

export default WeatherCard;
