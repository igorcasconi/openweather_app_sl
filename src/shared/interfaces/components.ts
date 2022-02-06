import {ViewProps} from 'react-native';
import {
  FlexboxProps,
  SpaceProps,
  LayoutProps,
  ColorProps,
  PositionProps,
  BordersProps,
  ShadowProps,
} from 'styled-system';

export interface ColumnProps
  extends FlexboxProps,
    SpaceProps,
    LayoutProps,
    ColorProps,
    PositionProps,
    BordersProps,
    ViewProps,
    ShadowProps {}
