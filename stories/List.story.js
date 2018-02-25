import React from 'react';

import {
  DLClass,
  DTClass,
  DDClass,
} from '../src/components/List';

const ListStory = (
  <div>
    <h2>Description List</h2>
    <dl className={DLClass}>
      <dt className={DTClass}>Espresso</dt>
      <dd className={DDClass}>1 oz. espresso</dd>
      <dt className={DTClass}>Espresso Macchiato</dt>
      <dd className={DDClass}>1 oz. espresso + 1 Tbs. foamed milk</dd>
      <dt className={DTClass}>Cappuccino</dt>
      <dd className={DDClass}>1/3 espresso, 1/3 steamed milk, 1/3 foam</dd>
    </dl>
  </div>
);

export default ListStory;
