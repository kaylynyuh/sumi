import React from 'react';
import renderer from 'react-test-renderer';
import { createSerializer } from 'jest-emotion';
import * as emotion from 'emotion';

import LinkClass from '../src/components/Link';

expect.addSnapshotSerializer(createSerializer(emotion));

test('renders Link', () => {
  const reactComponent = renderer
    .create(<div className={LinkClass}>Test</div>)
    .toJSON();

  expect(reactComponent).toMatchSnapshot();
});
