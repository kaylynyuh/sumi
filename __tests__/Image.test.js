import React from 'react';
import renderer from 'react-test-renderer';
import { createSerializer } from 'jest-emotion';
import * as emotion from 'emotion';

import ImageClass from '../src/components/Image';

expect.addSnapshotSerializer(createSerializer(emotion));

test('renders Image', () => {
  const reactComponent = renderer
    .create(<div className={ImageClass}>Test</div>)
    .toJSON();

  expect(reactComponent).toMatchSnapshot();
});
