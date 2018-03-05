import { css, keyframes } from 'emotion';

import colors from '../styles/colors';
import typography, { pxToRem } from '../styles/typography';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const CardClass = css`
  margin: 0 0 1rem;
  overflow: hidden;
  border: ${pxToRem(1)} solid ${colors.gray5};
  border-radius: ${pxToRem(3)};
  font-size: ${pxToRem(16)};
  font-weight: ${typography.fontWeightRegular};
  color: ${colors.primaryColor};
`;

const CardImageClass = css`
  max-width: 100%;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-name: ${fadeIn};
`;

const CardContentClass = css`
  padding: 1rem;
`;

const CardContentItemClass = css`
  margin: 0 0 1rem;
  
  &:last-child {
    margin: 0;
  }
`;

export {
  CardClass,
  CardImageClass,
  CardContentClass,
  CardContentItemClass,
};
