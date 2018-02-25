import React from 'react';
import { cx } from 'emotion';

import icons, { Icon } from '../src/styles/icons';
import colors from '../src/styles/colors';

import {
  ButtonClass,
  ButtonAccentClass,
  ButtonIconLeftClass,
  ButtonIconRightClass,
  ButtonAccentIconLeftClass,
  ButtonAccentIconRightClass,
  SetButtonIcon,
} from '../src/components/Button';

const sumiGrayIcon = Icon(icons.sumi);
const sumiWhiteIcon = Icon(icons.sumi, colors.white);

const previewStyle = {
  margin: '0 1rem 1rem 0',
};

const ButtonStory = (
  <div>
    <div>
      <button
        className={ButtonClass}
        onMouseDown={e => e.preventDefault()}
        style={previewStyle}
      >
        Normal
      </button>
      <button
        className={cx(ButtonIconLeftClass, SetButtonIcon(sumiGrayIcon))}
        onMouseDown={e => e.preventDefault()}
        style={previewStyle}
      >
        Left Icon
      </button>
      <button
        className={cx(ButtonIconRightClass, SetButtonIcon(sumiGrayIcon))}
        onMouseDown={e => e.preventDefault()}
        style={previewStyle}
      >
        Right Icon
      </button>
    </div>
    <div>
      <button
        className={ButtonAccentClass}
        onMouseDown={e => e.preventDefault()}
        style={previewStyle}
      >
        Accent
      </button>
      <button
        className={cx(ButtonAccentIconLeftClass, SetButtonIcon(sumiWhiteIcon))}
        onMouseDown={e => e.preventDefault()}
        style={previewStyle}
      >
        Left Icon
      </button>
      <button
        className={cx(ButtonAccentIconRightClass, SetButtonIcon(sumiWhiteIcon))}
        onMouseDown={e => e.preventDefault()}
        style={previewStyle}
      >
        Right Icon
      </button>
    </div>
  </div>
);

export default ButtonStory;
