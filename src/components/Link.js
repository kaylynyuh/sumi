import { css } from 'emotion';

import colors from '../styles/colors';
import typography, { pxToRem } from '../styles/typography';

const LinkClass = css`
  font-size: ${pxToRem(16)};
  font-weight: ${typography.fontWeightRegular};
  color: ${colors.primaryColor};
  text-decoration: underline;

  :hover,
  :focus {
    color: ${colors.gray3};
  }
`;

export default LinkClass;
