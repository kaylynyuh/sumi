import React from 'react';
import renderer from 'react-test-renderer';
import { createSerializer } from 'jest-emotion';
import * as emotion from 'emotion';

import {
  Heading1Class,
  Heading2Class,
  Heading3Class,
  Heading4Class,
  Heading5Class,
} from '../src/components/Typography';

expect.addSnapshotSerializer(createSerializer(emotion));

test('renders Heading', () => {
  const reactComponent = renderer
    .create(
      <div>
        <h1 className={Heading1Class}>Heading One</h1>
        <h2 className={Heading2Class}>Heading Two</h2>
        <h3 className={Heading3Class}>Heading Three</h3>
        <h4 className={Heading4Class}>Heading Four</h4>
        <h5 className={Heading5Class}>Heading Five</h5>
      </div>,
    )
    .toJSON();

  expect(reactComponent).toMatchSnapshot();
});
