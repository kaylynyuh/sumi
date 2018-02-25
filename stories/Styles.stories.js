import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import ButtonStory from './Button.story';
import LinkStory from './Link.story';
import TypographyStory from './Typography.story';
import ImageStory from './Image.story';
import FormStory from './Form.story';
import ListStory from './List.story';

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
    'Link',
    withInfo({
      text: 'A basic link style.',
    })(() => (
      <div>
        { LinkStory }
      </div>
    )),
  )
  .add(
    'Typography',
    withInfo({
      text: '',
    })(() => (
      <div>
        { TypographyStory }
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
  )
  .add(
    'Form',
    withInfo({
      text: 'Simply styled accessible form elements.',
    })(() => (
      <div>
        { FormStory }
      </div>
    )),
  )
  .add(
    'List',
    withInfo({
      text: 'Simple list styles.',
    })(() => (
      <div>
        { ListStory }
      </div>
    )),
  );
