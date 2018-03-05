import React from 'react';
import { css } from 'emotion';

import colors from '../src/styles/colors';

const paletteGroupClass = css`
  display: flex;
  flex-direction: column;
`;

const palette = Object.keys(colors).map((key) => {
  const paletteClass = css`
    margin-bottom: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
  `;

  const paletteColorClass = css`
    width: 2rem;
    height: 2rem;
    background: ${colors[key]};
    text-indent: -99999px;
    border: 1px solid ${colors.gray5};
    margin-right: 1rem;
  `;

  const paletteMetaClass = css`
    margin: 0;
    font-size:1rem;
    color: ${colors.gray3};
  `;

  return (
    <div key={key} className={paletteClass}>
      <div className={paletteColorClass}>{colors[key]}</div>
      <p className={paletteMetaClass}>{key}</p>
    </div>
  );
});

const ColorStory = (
  <div className={paletteGroupClass}>
    {palette}
  </div>
);

export default ColorStory;
