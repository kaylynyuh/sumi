import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Button from '../src/components/Button';

storiesOf('Button', module)
  .add(
    'Button',
    withInfo({
      text: 'Button description',
    })(() => (
      <div>
        <Button>Test</Button>
      </div>
    )),
  );
