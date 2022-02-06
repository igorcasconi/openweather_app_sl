import styled from 'styled-components/native';
import {
  border,
  color,
  flexbox,
  layout,
  position,
  shadow,
  space,
} from 'styled-system';
import {ColumnProps} from '../../shared/interfaces/components';

const ColumnComponent: React.FC<ColumnProps> = styled.View`
  ${flexbox}
  ${space}
  ${layout}
  ${color}
  ${position}
  ${border}
  ${shadow}
`;

export default ColumnComponent;
