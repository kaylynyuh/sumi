import React from 'react';
import renderer from 'react-test-renderer';
import { createSerializer } from 'jest-emotion';
import * as emotion from 'emotion';

import Boilerplate from '../src/components/Boilerplate';

expect.addSnapshotSerializer(createSerializer(emotion));

test('renders Boilerplate', () => {
  const reactComponent = renderer
    .create(<Boilerplate>Test</Boilerplate>)
    .toJSON();

  expect(reactComponent).toMatchSnapshot();
});
