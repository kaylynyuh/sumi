import React from 'react';
import renderer from 'react-test-renderer';
import { createSerializer } from 'jest-emotion';
import * as emotion from 'emotion';

import {
  CardClass,
  CardImageClass,
  CardContentClass,
  CardContentItemClass,
} from '../src/components/Card';

expect.addSnapshotSerializer(createSerializer(emotion));

test('renders Card', () => {
  const reactComponent = renderer
    .create(
      <div
        className={CardClass}
      >
        <img
          className={CardImageClass}
          src="https://source.unsplash.com/ngcX09jzLE0/800x533"
          alt="Jelly Fish"
        />
        <div className={CardContentClass}>
          <p className={CardContentItemClass}>Movements living a fully ethical life silo emerging justice, benefit corporation do-gooder program areas changemaker inspire society black lives matter the resistance uplift.</p>
        </div>
      </div>,
    )
    .toJSON();

  expect(reactComponent).toMatchSnapshot();
});
