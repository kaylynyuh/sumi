import React from 'react';
import { css } from 'emotion';

import {
  ImageClass,
  ImageCircleClass,
} from '../src/components/Image';

const previewWrapperClass = css`
  margin: 0 0 4rem;

  @media(min-width: 48em) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 4rem;
  }
`;

const ImageStory = (
  <div className={previewWrapperClass}>
    <img
      className={ImageClass}
      src="https://source.unsplash.com/CEkwZTgUvVQ/800x533"
      alt="Pontocho Alley"
    />
    <img
      className={ImageCircleClass}
      src="https://source.unsplash.com/ngcX09jzLE0/800x800"
      alt="Jelly Fish"
    />
  </div>
);

export default ImageStory;
