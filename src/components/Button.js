import { css } from 'emotion';

import colors from '../styles/colors';
import typography, { pxToRem } from '../styles/typography';
import defaultStyles from '../styles/defaults';

const ButtonClass = css`
  font-family: ${typography.baseFontFamily};
  display: inline-block;
  background: ${colors.white};
  position: relative;
  margin: 0;
  padding: 0 ${pxToRem(25)};
  width: ${pxToRem(200)};
  max-width: 100%;
  height: ${pxToRem(42)};
  line-height: ${pxToRem(42)};
  box-shadow: 0 ${pxToRem(2)} ${pxToRem(5)} ${colors.dropShadowColor};
  border: ${pxToRem(1)} solid ${colors.primaryColor};
  cursor: pointer;
  box-sizing: border-box;
  border-radius: ${pxToRem(2)};
  text-decoration: none;
  font-size: ${pxToRem(16)};
  font-weight: ${typography.fontWeightRegular};
  color: ${colors.primaryColor};
  text-align: center;
  transition: opacity ${defaultStyles.transitionSpeed} ease;
  user-select: none;
  outline: none;

  &:hover {
    opacity: ${defaultStyles.hoverOpacity};
  }
  
  &:active {
    box-shadow: 0 0 ${pxToRem(5)} ${colors.dropShadowColor};
  }
  
  &:focus {
    border-color: ${colors.info};
  }

  &:disabled {
    opacity: ${defaultStyles.disabledOpacity};
    cursor: not-allowed;
  }
`;

const buttonIconBase = css`
  position: absolute;
  top: 50%;
  display: inline-block;
  content: "";
  width: ${pxToRem(20)};
  height: ${pxToRem(20)};
`;

const ButtonIconLeftClass = css`
  ${ButtonClass};
  padding-left: 3.5rem;
  
  &::before {
    ${buttonIconBase};
    transform: translate(-150%, -50%);
  }
`;

const ButtonIconRightClass = css`
  ${ButtonClass};
  padding-right: 3.5rem;

  &::after {
    ${buttonIconBase};
    transform: translate(50%, -50%);
  }
`;

const ButtonAccentClass = css`
  ${ButtonClass};
  background: ${colors.primaryColor};
  color: ${colors.white};
`;

const ButtonAccentIconLeftClass = css`
  ${ButtonAccentClass};
  padding-left: 3.5rem;
  
  &::before {
    ${buttonIconBase};
    transform: translate(-150%, -50%);
  }
`;

const ButtonAccentIconRightClass = css`
  ${ButtonAccentClass};
  padding-right: 3.5rem;

  &::after {
    ${buttonIconBase};
    transform: translate(50%, -50%);
  }
`;

const ButtonMinimalClass = css`
  ${ButtonClass};
  border-radius: 0;
  border-top-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
  background: transparent;
  box-shadow: none;
  text-align: left;
  padding: 0;
  
  &:active {
    box-shadow: none;
  }
`;

const ButtonMinimalIconLeftClass = css`
  ${ButtonMinimalClass};
  padding-left: 1.75rem;

  &::before {
    ${buttonIconBase};
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
  }
`;

const ButtonMinimalIconRightClass = css`
  ${ButtonMinimalClass};
  padding-right: 1.75rem;
  
  &::after {
    ${buttonIconBase};
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0, -50%);
  }
`;

const IconButtonClass = css`
  display: inline-block;
  position: relative;
  margin: 0;
  background: transparent;
  box-shadow: none;
  border: 0;
  padding: ${pxToRem(5)};
  width: ${pxToRem(42)};
  height: ${pxToRem(42)};
  line-height: ${pxToRem(40)};
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 50%;
  text-decoration: none;
  font-size: ${pxToRem(16)};
  font-weight: ${typography.fontWeightRegular};
  color: ${colors.primaryColor};
  text-align: center;
  transition: opacity ${defaultStyles.transitionSpeed} ease;
  text-indent: ${defaultStyles.invisibleTextIndent};

  &:hover {
    opacity: ${defaultStyles.hoverOpacity};
  }
  
  &:before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: inline-block;
    content: "";
    width: ${pxToRem(24)};
    height: ${pxToRem(24)};
  }
`;

const SetButtonIcon = (svg, direction = 'left') => {
  let buttonIconClass = null;

  if (direction === 'left') {
    buttonIconClass = css`
      ::before {
        background-image: url('${svg}');
      }
    `;
  } else if (direction === 'right') {
    buttonIconClass = css`
      ::after {
        background-image: url('${svg}');
      }
    `;
  }

  return buttonIconClass;
};

export {
  ButtonClass,
  ButtonIconLeftClass,
  ButtonIconRightClass,
  ButtonAccentClass,
  ButtonAccentIconLeftClass,
  ButtonAccentIconRightClass,
  ButtonMinimalClass,
  ButtonMinimalIconLeftClass,
  ButtonMinimalIconRightClass,
  IconButtonClass,
  SetButtonIcon,
};
