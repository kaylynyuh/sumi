import React from 'react';
import renderer from 'react-test-renderer';
import { createSerializer } from 'jest-emotion';
import * as emotion from 'emotion';

import BoilerplateClass from '../src/components/Boilerplate';

expect.addSnapshotSerializer(createSerializer(emotion));

test('renders Boilerplate', () => {
  const reactComponent = renderer
    .create(<div className={BoilerplateClass}>Test</div>)
    .toJSON();

  expect(reactComponent).toMatchSnapshot();
});
