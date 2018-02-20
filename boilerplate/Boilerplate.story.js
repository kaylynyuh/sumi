import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import BoilerplateClass from '../src/components/Boilerplate';

storiesOf('Styles', module)
  .add(
    'Boilerplate',
    withInfo({
      text: 'Boilerplate description',
    })(() => (
      <div>
        <div className={BoilerplateClass}>Test</div>
      </div>
    )),
  );
