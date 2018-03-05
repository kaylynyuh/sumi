import { css } from 'emotion';

import colors from '../styles/colors';
import typography, { pxToRem } from '../styles/typography';

const CardClass = css`
  overflow: hidden;
  border: ${pxToRem(1)} solid ${colors.gray5};
  border-radius: ${pxToRem(3)};
  font-size: ${pxToRem(16)};
  font-weight: ${typography.fontWeightRegular};
  color: ${colors.primaryColor};
`;

const CardImageClass = css`
  max-width: 100%;
`;

const CardContentClass = css`
  padding: 1rem;
`;

const CardContentItemClass = css`
  margin: 0 0 1rem;
  
  &:last-of-type {
    margin: 0;
  }
`;

export {
  CardClass,
  CardImageClass,
  CardContentClass,
  CardContentItemClass,
};
