import React from 'react';

import {Column, Text} from '../../components';

const Cities: React.FC = () => (
  <Column flex={1} backgroundColor="gray" height="100%" width={1} px={24}>
    <Text fontSize={18} fontFamily="Roboto-Bold" textAlign="center">
      Parece que você ainda não adicionou uma cidade
    </Text>
  </Column>
);

export default Cities;
