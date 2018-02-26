import React from 'react';
import renderer from 'react-test-renderer';
import { createSerializer } from 'jest-emotion';
import * as emotion from 'emotion';

import {
  ButtonClass,
  ButtonAccentClass,
  ButtonMinimalClass,
  IconButtonClass,
} from '../src/components/Button';

expect.addSnapshotSerializer(createSerializer(emotion));

test('renders Button', () => {
  const reactComponent = renderer
    .create(<button className={ButtonClass}>Test</button>)
    .toJSON();

  expect(reactComponent).toMatchSnapshot();
});

test('renders Accent Button', () => {
  const reactComponent = renderer
    .create(<button className={ButtonAccentClass}>Test</button>)
    .toJSON();

  expect(reactComponent).toMatchSnapshot();
});

test('renders Minimal Button', () => {
  const reactComponent = renderer
    .create(<button className={ButtonMinimalClass}>Test</button>)
    .toJSON();

  expect(reactComponent).toMatchSnapshot();
});

test('renders Icon Button', () => {
  const reactComponent = renderer
    .create(<button className={IconButtonClass}>Test</button>)
    .toJSON();

  expect(reactComponent).toMatchSnapshot();
});
