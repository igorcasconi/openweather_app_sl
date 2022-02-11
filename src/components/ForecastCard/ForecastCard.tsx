import React, {useMemo} from 'react';
import {format, getDay, isToday, isTomorrow} from 'date-fns';

import {Column} from '../Column';
import {Card} from '../Card';
import {Row} from '../Row';
import {Text} from '../Text';
import {
  capitalizeFirstLetter,
  getNameDayOfWeek,
  parsedDateTZ,
} from '../../utils/normalizers';

import {ForecastItemCity} from '../../shared/interfaces';
import pt from 'date-fns/esm/locale/pt';

interface ForecastCardProps {
  data?: ForecastItemCity;
  timezone?: number;
}

const ForecastCard: React.FC<ForecastCardProps> = ({data, timezone}) => {
  const date = parsedDateTZ(data?.dt, timezone);
  const titleCard = useMemo(() => {
    if (!date) {
      return '';
    }

    const today = isToday(date);
    const tomorrow = isTomorrow(date);
    const numberDay = getDay(date);
    const dayOfWeek = getNameDayOfWeek(numberDay);
    if (today) {
      return 'Hoje';
    } else if (tomorrow) {
      return 'Amanhã';
    } else {
      return dayOfWeek;
    }
  }, [date]);

  return (
    <Card height={140}>
      <Row width={1} justifyContent="space-between">
        <Column>
          <Row width={1}>
            <Text fontSize={24} color="black" letterSpacing={0.25}>
              {titleCard}
            </Text>
          </Row>
          <Row width={1} mt="2px">
            <Text fontSize={14} color="black" letterSpacing={0.25}>
              {date && format(date, "dd 'de' MMMM", {locale: pt})}
            </Text>
          </Row>
        </Column>
        <Column>
          <Row width={1} mt={10}>
            <Text fontSize={34} color="orange" letterSpacing={0.25}>
              {data?.temp.day.toFixed(0)}º
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
            {data?.temp.min.toFixed(0)}º - {data?.temp.max.toFixed(0)}º
          </Text>
        </Column>
      </Row>
    </Card>
  );
};

export default ForecastCard;
