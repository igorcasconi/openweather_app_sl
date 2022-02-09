import React from 'react';
import styled from 'styled-components/native';
import {ColumnProps} from '../../shared/interfaces';
import {Column} from '../Column';

const Card: React.FC<ColumnProps> = ({children, ...props}) => (
  <CardComponent
    backgroundColor="white"
    width={1}
    height={130}
    borderRadius="4px"
    borderBottomWidth="1px"
    borderBottomColor="silver"
    px={16}
    pt={16}
    pb={10}
    mb={16}
    justifyContent="space-between"
    {...props}>
    {children}
  </CardComponent>
);

const CardComponent = styled(Column)`
  elevation: 2;
`;

export default Card;
