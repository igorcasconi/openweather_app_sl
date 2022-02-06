import React from 'react';

import {Column} from '../Column';

import {ColumnProps} from '../../shared/interfaces/components';

interface RowProps extends ColumnProps {}

const RowComponent: React.FC<RowProps> = props => (
  <Column flexDirection="row" {...props} />
);

export default RowComponent;
