import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { cx, css } from 'emotion';

import {
  Heading1FancyClass,
  Heading3Class,
  ParagraphClass,
} from '../src/components/Typography';

import LinkClass from '../src/components/Link';
import ImageClass from '../src/components/Image';
import {
  ButtonIconLeftClass,
  SetButtonIcon,
} from '../src/components/Button';

import icons, { Icon } from '../src/styles/icons';
import { pxToRem } from '../src/styles/typography'

const logo = Icon('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 60"><path d="M51.8 40.7C43.2 50 28.1 50.6 18.7 42S8.8 18.3 17.4 8.6c6.3-6.8 15.4-8.9 23.7-6.5C30.2-2.3 16.6.3 8 9.4c-11.2 12-10.7 31 1.6 42.5s31 10.7 42.5-1.6c8.6-9.4 10.2-22.9 5-33.6 2.5 7.8 1 17.2-5.3 24z" fill="#333"/><path d="M83.8 41.2c-1-.3-2-.8-2.8-1.3v-4c.6 1.5 1.4 2.6 2.6 3.3 1.2.8 2.4 1.1 3.7 1.1s2.3-.4 3.2-1.3c.9-.8 1.3-1.9 1.3-3.1 0-.8-.2-1.5-.5-2.1s-.9-1.1-1.6-1.7c-.7-.5-1.8-1.1-3.1-1.7-1.9-.9-3.3-1.8-4.1-2.7-.9-.9-1.3-2.1-1.3-3.5 0-1.2.3-2.2.8-3.1.6-.9 1.3-1.6 2.3-2.1s2-.7 3.1-.7c1 0 1.9.1 2.9.4.9.3 1.8.7 2.6 1.2v3.5c-.5-1.2-1.3-2.1-2.4-2.8-1.1-.7-2.1-1-3.2-1-1.2 0-2.2.4-3 1.2-.8.8-1.1 1.8-1.1 2.9 0 .8.2 1.5.7 2.1s1 1.1 1.7 1.5 1.6.9 2.8 1.4c1.2.6 2.2 1.1 3 1.6s1.4 1.2 2 2c.5.8.8 1.8.8 2.9 0 1.3-.3 2.4-.9 3.4s-1.5 1.7-2.5 2.2-2.2.8-3.4.8c-1.5.1-2.6-.1-3.6-.4zM102.1 41.7c-1.1 0-2-.4-2.8-1.1-.7-.7-1.1-1.9-1.1-3.4v-4.7c0-.9-.1-1.6-.4-2.1s-.6-.8-.9-1c-.4-.2-.5-.2-.5-.2h4v7.4c0 1 .3 1.8.8 2.4.6.5 1.2.8 2 .8s1.4-.3 2-.8.9-1.2.9-2v-4.8c0-.9-.1-1.5-.3-1.9-.2-.4-.5-.7-.8-.9-.3-.2-.4-.2-.4-.2h3.6v8.2c0 .9.1 1.5.4 1.9.3.3.6.5 1 .5h.2l-3.7 1.7v-2.3c-1.1 1.7-2.5 2.5-4 2.5zM115.5 31.3c.5-.7 1.2-1.2 1.8-1.6.7-.4 1.4-.6 2.1-.6.8 0 1.5.2 2.1.6s1.1.9 1.4 1.7c.6-.7 1.3-1.3 2-1.7.8-.4 1.5-.6 2.3-.6 1.2 0 2.1.4 2.8 1.1.7.8 1.1 1.8 1.1 3.3V38c0 1.2.2 2 .5 2.5s.6.7.8.8h-4.7c.3 0 .5-.3.8-.8s.4-1.3.4-2.5v-3.7c0-.7-.1-1.3-.3-1.8-.2-.4-.5-.8-.8-1.1-.5-.4-1.1-.6-1.8-.6-.8 0-1.4.3-2 .8s-.9 1.2-.9 2.1V38c0 1.2.1 2.1.4 2.5.3.5.6.7.8.8H120c.3 0 .5-.3.8-.8s.4-1.3.4-2.5v-3.7c0-.7-.1-1.3-.3-1.8-.2-.4-.5-.8-.8-1.1-.5-.4-1.1-.6-1.8-.6-.8 0-1.5.3-2 .8-.6.5-.9 1.2-.9 2.1V38c0 1.2.2 2.1.5 2.5s.6.7.9.7h-4.7c.3 0 .5-.3.8-.8s.4-1.3.4-2.5V33c0-.9-.1-1.5-.4-1.9-.3-.3-.6-.5-1-.5l3.5-1.6.1 2.3zM136 31.2c-.3-.3-.6-.5-1-.5l3.5-1.6V38c0 1 .1 1.7.3 2.2s.4.8.7 1c.2.2.4.2.4.1h-4.7c0 .1.1 0 .4-.1.2-.2.5-.5.7-1s.3-1.2.3-2.2v-5c-.1-.9-.3-1.5-.6-1.8zm.4-6.6c-.3-.3-.4-.7-.4-1.1s.1-.8.4-1.1c.3-.3.6-.5 1.1-.5s.9.2 1.1.5c.3.3.4.7.4 1.1s-.1.8-.4 1.1c-.3.3-.7.5-1.1.5-.5 0-.9-.1-1.1-.5z" fill="#333"/></svg>');

const logoClass = css`
  width: ${pxToRem(140)};
  height: ${pxToRem(60)};
  margin: 0 0 2rem;
`;

const githubLogo = Icon('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 .8C5.6.8.5 5.9.5 12.3c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.6-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.2 3.3 1 .1-.7.4-1.2.7-1.5-2.6-.3-5.2-1.3-5.2-5.7 0-1.3.4-2.3 1.2-3.1-.2-.4-.6-1.6.1-3.1 0 0 1-.3 3.2 1.2.8-.3 1.8-.5 2.8-.5 1 0 2 .1 2.9.4C17.1 5.2 18 5.6 18 5.6c.6 1.6.2 2.8.1 3 .7.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.1v3.2c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.9 18.4.8 12 .8z" fill-rule="evenodd" clip-rule="evenodd" fill="#181616"/></svg>');

storiesOf('Getting Started', module)
  .add(
    'Introduction',
    withInfo({
    })(() => (
      <div>
        <img src={logo} alt="Sumi Logo" className={cx(ImageClass, logoClass)} />

        <h3 className={Heading3Class}>Overview</h3>
        <p className={ParagraphClass}><a className={LinkClass} href="https://github.com/elishaterada/sumi">Sumi</a> is a framework agnostic Storybook components inspired by Japanese sumi-e art style.</p>

        <p className={ParagraphClass}>All components simply exports encapsulated CSS classes, allowing the use in any JS frameworks.</p>

        <p className={ParagraphClass}>Import them as you like, customize the style, and use the exported classes on your JS components.</p>

        <p className={ParagraphClass}><a href="https://github.com/elishaterada/sumi" className={cx(ButtonIconLeftClass, SetButtonIcon(githubLogo, 'left'))}>GitHub</a></p>

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
