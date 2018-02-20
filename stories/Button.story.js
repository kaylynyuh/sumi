import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import ButtonClass from '../src/components/Button';

const previewStyle = {
  margin: '0 1rem 1rem 0',
};

storiesOf('Styles', module)
  .add(
    'Button',
    withInfo({
      text: 'A basic button style intended to be used with your custom layout style.',
    })(() => (
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
    )),
  );
