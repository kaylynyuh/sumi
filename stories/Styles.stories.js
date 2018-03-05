import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import ColorStory from './Color.story';
import ButtonStory from './Button.story';
import LinkStory from './Link.story';
import TypographyStory from './Typography.story';
import ImageStory from './Image.story';
import FormStory from './Form.story';
import ListStory from './List.story';
import TableStory from './Table.story';
import CardStory from './Card.story';

storiesOf('Styles', module)
  .add(
    'Color',
    withInfo({
      text: 'Colors defined for this application.',
    })(() => (
      <div>
        { ColorStory }
      </div>
    )),
  )
  .add(
    'Button',
    withInfo({
      text: 'Basic button styles intended to be used with your custom layout style. It can also be used to style links.',
    })(() => (
      <div>
        { ButtonStory }
      </div>
    )),
  )
  .add(
    'Link',
    withInfo({
      text: 'A basic link style. To apply the look of buttons, simply import button classes and apply to links.',
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
  )
  .add(
    'Table',
    withInfo({
      text: 'Simple table styles.',
    })(() => (
      <div>
        { TableStory }
      </div>
    )),
  )
  .add(
    'Card',
    withInfo({
      text: 'Simple card style.',
    })(() => (
      <div>
        { CardStory }
      </div>
    )),
  );
