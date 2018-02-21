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

const ImageClass = css`
  max-width: 100%;
  border-radius: ${pxToRem(3)};
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-name: ${fadeIn};
`;

export default ImageClass;
