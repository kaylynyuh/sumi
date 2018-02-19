import React from 'react';
import renderer from 'react-test-renderer';
import { createSerializer } from 'jest-emotion';
import * as emotion from 'emotion';

import Button from '../src/components/Button';

expect.addSnapshotSerializer(createSerializer(emotion));

test('renders Button', () => {
  const reactComponent = renderer
    .create(<Button>Test</Button>)
    .toJSON();

  expect(reactComponent).toMatchSnapshot();
});
