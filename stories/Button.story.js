import React from 'react';

import {
  ButtonClass,
  ButtonAccentClass,
} from '../src/components/Button';

const previewStyle = {
  margin: '0 1rem 1rem 0',
};

const ButtonStory = (
  <div>
    <button
      className={ButtonClass}
      onMouseDown={e => e.preventDefault()}
      style={previewStyle}
    >
      Normal
    </button>
    <button
      className={ButtonAccentClass}
      onMouseDown={e => e.preventDefault()}
      style={previewStyle}
    >
      Accent
    </button>
  </div>
);

export default ButtonStory;
