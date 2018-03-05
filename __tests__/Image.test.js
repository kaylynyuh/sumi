import React from 'react';
import renderer from 'react-test-renderer';
import { createSerializer } from 'jest-emotion';
import * as emotion from 'emotion';

import {
  ImageClass,
  ImageCircleClass,
} from '../src/components/Image';

expect.addSnapshotSerializer(createSerializer(emotion));

test('renders Image', () => {
  const reactComponent = renderer
    .create(
      <div>
        <img
          className={ImageClass}
          src="https://source.unsplash.com/ngcX09jzLE0/800x533"
          alt="Jelly Fish"
        />
        <img
          className={ImageCircleClass}
          src="https://source.unsplash.com/ngcX09jzLE0/800x533"
          alt="Jelly Fish"
        />
      </div>,
    )
    .toJSON();

  expect(reactComponent).toMatchSnapshot();
});
