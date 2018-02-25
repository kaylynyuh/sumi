import { css } from 'emotion';

import colors from '../styles/colors';
import typography, { pxToRem } from '../styles/typography';
import { Heading3Class } from './Typography';

const TableClass = css`
  font-size: ${pxToRem(16)};
  font-weight: ${typography.fontWeightRegular};
  color: ${colors.primaryColor};
  border-collapse:collapse;
`;

const TableCaptionClass = css`
  ${Heading3Class};
  text-align: left;
`;

const TableRowClass = css`
  
  border-bottom: ${pxToRem(1)} solid ${colors.gray3};
  text-align: left;
`;

const TableHeaderClass = css`
  text-align: left;
  padding: 1rem 2rem 1rem 0;
`;

const TableCellClass = css`
  text-align: left;
  padding: 1rem 2rem 1rem 0;
`;

export {
  TableClass,
  TableCaptionClass,
  TableRowClass,
  TableHeaderClass,
  TableCellClass,
};
