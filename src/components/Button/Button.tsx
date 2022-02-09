import React from 'react';
import {Text, TouchableOpacityProps} from 'react-native';
import {
  space,
  layout,
  color,
  ColorProps,
  SpaceProps,
  LayoutProps,
  PositionProps,
  position,
} from 'styled-system';
import styled from 'styled-components/native';

type Props = SpaceProps &
  LayoutProps &
  ColorProps &
  PositionProps &
  TouchableOpacityProps & {
    text?: string;
    isLoading?: boolean;
  };

const ButtonComponent: React.FC<Props> = ({
  text,
  isLoading,
  disabled,
  children,
  ...props
}) => (
  <Button disabled={isLoading || disabled} {...props}>
    {!text ? children : <Text>{text}</Text>}
  </Button>
);

const Button = styled.TouchableOpacity`
  padding: 10px;
  border-radius: 4px;
  background-color: white;
  align-items: center;
  ${space}
  ${layout}
  ${color}
  ${position}
`;

export default ButtonComponent;
