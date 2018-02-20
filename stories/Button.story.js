import React from 'react';

import ButtonClass from '../src/components/Button';

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
      Action
    </button>
    <button
      className={ButtonClass}
      onMouseDown={e => e.preventDefault()}
      style={previewStyle}
    >
      More
    </button>
  </div>
);

export default ButtonStory;
