import React from 'react';
import {TextInputProps} from 'react-native';
import {
  space,
  layout,
  typography,
  color,
  SpaceProps,
  LayoutProps,
  TypographyProps,
  ColorProps,
} from 'styled-system';
import styled, {css} from 'styled-components/native';
import {Row} from '../Row';

type Props = SpaceProps &
  LayoutProps &
  TypographyProps &
  ColorProps &
  TextInputProps & {};

const InputComponent: React.FC<Props> = ({width, height, ...props}) => {
  return (
    <Row width={width} height={height}>
      <StyledInput autoCapitalize="none" {...props} />
    </Row>
  );
};

const StyledInput = styled.TextInput<Props>(
  () => css`
    font-family: 'Roboto-Regular';
    font-size: 16px;
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    width: 100%;
    ${space}
    ${layout}
    ${typography}
    ${color}
  `,
);

export default InputComponent;
