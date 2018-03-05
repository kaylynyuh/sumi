import React from 'react';
import { css } from 'emotion';

import {
  CardClass,
  CardImageClass,
  CardContentClass,
  CardContentItemClass,
} from '../src/components/Card';

const previewWrapperClass = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  margin: 0 0 4rem;
`;

const CardStory = (
  <div className={previewWrapperClass}>
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
    </div>
    <div
      className={CardClass}
    >
      <img
        className={CardImageClass}
        src="https://source.unsplash.com/CEkwZTgUvVQ/800x533"
        alt="Pontocho Alley"
      />
      <div className={CardContentClass}>
        <p className={CardContentItemClass}>Movements living a fully ethical life silo emerging justice, benefit corporation do-gooder program areas changemaker inspire society black lives matter the resistance uplift.</p>
      </div>
    </div>
    <div
      className={CardClass}
    >
      <img
        className={CardImageClass}
        src="https://source.unsplash.com/MDJvfXJGnRM/800x533"
        alt="Pontocho Alley"
      />
      <div className={CardContentClass}>
        <p className={CardContentItemClass}>Movements living a fully ethical life silo emerging justice, benefit corporation do-gooder program areas changemaker inspire society black lives matter the resistance uplift.</p>
      </div>
    </div>
  </div>
);

export default CardStory;
