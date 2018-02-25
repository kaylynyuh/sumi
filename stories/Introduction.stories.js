import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { css } from 'emotion';

import {
  Heading3Class,
  ParagraphClass,
} from '../src/components/Typography';

import icons, { Icon } from '../src/styles/icons';

const logo = Icon(icons.sumi);
const logoClass = css`
  width: 6rem;
  height: 6rem;
  margin: 0 0 2rem;
`;

storiesOf('Getting Started', module)
  .add(
    'Introduction',
    withInfo({
    })(() => (
      <div>
        <img src={logo} alt="Sumi Logo" className={logoClass} />

        <h3 className={Heading3Class}>Overview</h3>
        <p className={ParagraphClass}>Sumi is a framework agnostic Storybook components inspired by Japanese sumi-e art style.</p>

        <p className={ParagraphClass}>All components simply exports encapsulated CSS classes, allowing the use in any JS frameworks.</p>

        <p className={ParagraphClass}>Import them as you like, customize the style, and use the exported classes on your JS components.</p>

        <h3 className={Heading3Class}>Philosophy</h3>

        <p>Sumi is intended to provide a simple, user-friendly, and accessible UI component styles that is portable via CSS-in-JS technique.</p>

        <p className={ParagraphClass}>The theme is composed of white, shades of gray, and black.</p>

        <ul>
          <li><p className={ParagraphClass}>Keep the original theme and let your content (text and image) shine.</p></li>
          <li><p className={ParagraphClass}>Use it as a starting point for your theme customization.</p></li>
          <li><p className={ParagraphClass}>Defer the design decision and focus on rapid prototyping.</p></li>
        </ul>
      </div>
    )),
  );
