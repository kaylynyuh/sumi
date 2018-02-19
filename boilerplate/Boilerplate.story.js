import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Boilerplate from '../src/components/Boilerplate';

storiesOf('Boilerplate', module)
  .add(
    'Boilerplate',
    withInfo({
      text: 'Boilerplate description',
    })(() => (
      <div>
        <Boilerplate>Test</Boilerplate>
      </div>
    )),
  );
