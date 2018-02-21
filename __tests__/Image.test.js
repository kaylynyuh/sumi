import React from 'react';
import renderer from 'react-test-renderer';
import { createSerializer } from 'jest-emotion';
import * as emotion from 'emotion';

import ImageClass from '../src/components/Image';

expect.addSnapshotSerializer(createSerializer(emotion));

test('renders Image', () => {
  const reactComponent = renderer
    .create(<img
      className={ImageClass}
      src="https://source.unsplash.com/ngcX09jzLE0/800x533"
      alt="Jelly Fish"
    />)
    .toJSON();

  expect(reactComponent).toMatchSnapshot();
});
