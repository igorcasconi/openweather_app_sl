import {TextProps} from 'react-native';
import styled from 'styled-components/native';
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

type Props = SpaceProps &
  LayoutProps &
  TypographyProps &
  ColorProps &
  TextProps & {};

const Text: React.FC<Props> = styled.Text`
  font-family: 'Roboto-Regular';
  ${space}
  ${layout} 
  ${typography} 
  ${color}
`;

export default Text;
