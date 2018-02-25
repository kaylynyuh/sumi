import React from 'react';
import renderer from 'react-test-renderer';
import { createSerializer } from 'jest-emotion';
import * as emotion from 'emotion';

import {
  ButtonClass,
  ButtonAccentClass, ButtonMinimalClass,
} from '../src/components/Button';

expect.addSnapshotSerializer(createSerializer(emotion));

test('renders Button', () => {
  const reactComponent = renderer
    .create(<div className={ButtonClass}>Test</div>)
    .toJSON();

  expect(reactComponent).toMatchSnapshot();
});

test('renders Accent Button', () => {
  const reactComponent = renderer
    .create(<div className={ButtonAccentClass}>Test</div>)
    .toJSON();

  expect(reactComponent).toMatchSnapshot();
});

test('renders Minimal Button', () => {
  const reactComponent = renderer
    .create(<div className={ButtonMinimalClass}>Test</div>)
    .toJSON();

  expect(reactComponent).toMatchSnapshot();
});
