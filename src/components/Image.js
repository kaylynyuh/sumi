import { css, keyframes } from 'emotion';

import { pxToRem } from '../styles/typography';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const imageBaseClass = css`
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-name: ${fadeIn};
`;

const ImageClass = css`
  ${imageBaseClass};
  max-width: 100%;
  border-radius: ${pxToRem(3)};
`;

const ImageCircleClass = css`
  ${imageBaseClass};
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%;
`;

export {
  ImageClass,
  ImageCircleClass,
};
