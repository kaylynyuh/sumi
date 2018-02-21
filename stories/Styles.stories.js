import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import ButtonStory from './Button.story';
import HeadingStory from './Heading.story';
import ImageStory from './Image.story';

storiesOf('Styles', module)
  .add(
    'Button',
    withInfo({
      text: 'A basic button style intended to be used with your custom layout style.',
    })(() => (
      <div>
        { ButtonStory }
      </div>
    )),
  )
  .add(
    'Heading',
    withInfo({
      text: 'The first heading style is intended for a page header and intentionally subtle. The second heading style is intended for section titles to catch users’s attention as they scroll. The rest is intended to be more recessed.',
    })(() => (
      <div>
        { HeadingStory }
      </div>
    )),
  )
  .add(
    'Image',
    withInfo({
      text: 'Load images in style with fade-in animation and with responsive layout.',
    })(() => (
      <div>
        { ImageStory }
      </div>
    )),
  );
