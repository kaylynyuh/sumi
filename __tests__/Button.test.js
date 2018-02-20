import React from 'react';
import renderer from 'react-test-renderer';
import { createSerializer } from 'jest-emotion';
import * as emotion from 'emotion';

import ButtonClass from '../src/components/Button';

expect.addSnapshotSerializer(createSerializer(emotion));

test('renders Button', () => {
  const reactComponent = renderer
    .create(<div className={ButtonClass}>Test</div>)
    .toJSON();

  expect(reactComponent).toMatchSnapshot();
});
