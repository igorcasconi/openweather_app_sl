import React from 'react';
import {useMutation} from 'react-query';
import {Button, Column, Input, Row, Text} from '../../components';
import {getCitiesByName} from '../../services';

const Search: React.FC = () => {
  const {mutateAsync: mutateCities} = useMutation(getCitiesByName);

  const handleInputChange = async (value: string) => {
    let city;
    setTimeout(() => {
      city = mutateCities({city: value});
    }, 200);
    console.log(city, '<<<');
  };

  return (
    <Column width={1} height="100%" flex={1}>
      <Row width={1} height={45} backgroundColor="azure" px={10}>
        <Button width={40} height={40} backgroundColor="azure">
          <Text fontSize={18} color="white" fontFamily="Roboto-Regular">
            x
          </Text>
        </Button>
        <Input onChangeText={handleInputChange} />
      </Row>
    </Column>
  );
};

export default Search;
