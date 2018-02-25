import React from 'react';
import renderer from 'react-test-renderer';
import { createSerializer } from 'jest-emotion';
import * as emotion from 'emotion';

import {
  DLClass,
  DDClass,
  DTClass,
} from '../src/components/List';

expect.addSnapshotSerializer(createSerializer(emotion));

test('renders List', () => {
  const reactComponent = renderer
    .create(
      <dl className={DLClass}>
        <dt className={DTClass}>Espresso</dt>
        <dd className={DDClass}>1 oz. espresso</dd>
        <dt className={DTClass}>Espresso Macchiato</dt>
        <dd className={DDClass}>1 oz. espresso + 1 Tbs. foamed milk</dd>
        <dt className={DTClass}>Cappuccino</dt>
        <dd className={DDClass}>1/3 espresso, 1/3 steamed milk, 1/3 foam</dd>
      </dl>,
    )
    .toJSON();

  expect(reactComponent).toMatchSnapshot();
});
