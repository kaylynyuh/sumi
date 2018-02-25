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

        <p>The Sumie style is intended to provide a simple, user-friendly, and accessible UI component styles.</p>

        <p className={ParagraphClass}>The theme is composed of white, shades of gray, and black. This is the perfect theme to let your content (text and image) shine.</p>

        <p className={ParagraphClass}>Or, Sumie can be used as a starting point for your theme customization, and even kept as is to focus on a quick prototype development.</p>
      </div>
    )),
  );
