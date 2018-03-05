// Resources
// https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/How_to_structure_an_HTML_form

import { css } from 'emotion';
import Color from 'color';

import colors from '../styles/colors';
import defaultStyles from '../styles/defaults';
import typography, { pxToRem } from '../styles/typography';
import { Heading3Class } from './Typography';
import {
  ButtonAccentClass,
  ButtonClass,
} from './Button';

const successHover = Color(colors.success).lighten(0.5).hex().toString();

// Fieldset

const FieldsetClass = css`
  margin: 0 0 2rem;
  padding: 0;
  border: 0;
`;

// Legend

const LegendClass = css`
  ${Heading3Class};
  margin: 0 0 1.5rem;
`;

// Label

const LabelClass = css`
  display: block;
  margin-bottom: 0.5rem;
  color: ${colors.gray1};
  font-family: ${typography.baseFontFamily};
  font-size: ${pxToRem(14)};
`;

// Text Input
// Covers text based input types:
// number, password, email, tel

const TextInputClass = css`
  margin: 0 0 1.5rem;
  box-sizing: border-box;
  background: ${colors.white};
  min-width: ${pxToRem(240)};
  max-width: 100%;
  padding: 0.625rem;
  border: ${pxToRem(1)} solid ${colors.gray2};
  border-radius: ${pxToRem(2)};
  font-family: ${typography.baseFontFamily};
  font-size: 1rem;
  outline: none;
  
  &:focus {
    border-color: ${colors.info};
  }
  
  &:disabled {
    background: ${colors.gray6};
    cursor: not-allowed;
  }
`;

// File

const FileInputClass = css`
  width: ${pxToRem(0.1)};
  height: ${pxToRem(0.1)};
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;

  &:focus + label {
    opacity: ${defaultStyles.hoverOpacity};
    border-color: ${colors.info};
  }
`;

const FileInputLabelClass = css`
  ${ButtonClass};
  margin: 0 0 1.5rem;
  text-align: center;
  border-color: ${colors.gray2};
  color: ${colors.gray1};
`;

// Range

const RangeInputClass = css`
  appearance: none;
  width: 100%;
  margin: ${pxToRem(13.5)} 0 2rem;
  outline: none;

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: ${pxToRem(5)};
    cursor: pointer;
    background: ${colors.gray3};
    border-radius: 0;
  }
  &::-webkit-slider-thumb {
    box-shadow: ${pxToRem(1)} ${pxToRem(1)} ${pxToRem(10)} ${colors.dropShadowColor}, 0 0 1px ${colors.dropShadowColor};
    height: ${pxToRem(32)};
    width: ${pxToRem(32)};
    border-radius: 50%;
    background: ${colors.white};
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -${pxToRem(13.5)};
  }
  &:focus::-webkit-slider-runnable-track {
    background: ${colors.info};
  }

  &::-moz-range-track {
    width: 100%;
    height: ${pxToRem(5)};
    cursor: pointer;
    background: ${colors.gray3};
    border-radius: 0;
  }
  &::-moz-range-thumb {
    box-shadow: ${pxToRem(1)} ${pxToRem(1)} ${pxToRem(10)} ${colors.dropShadowColor}, 0 0 ${pxToRem(1)} ${colors.dropShadowColor};
    height: ${pxToRem(32)};
    width: ${pxToRem(32)};
    border-radius: 50%;
    background: ${colors.white};
    cursor: pointer;
  }

  &::-ms-track {
    width: 100%;
    height: ${pxToRem(5)};
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  &::-ms-fill-lower {
    background: ${colors.success};
    border-radius: 0;
  }
  &::-ms-fill-upper {
    background: ${colors.gray3};
    border-radius: 0;
  }
  &::-ms-thumb {
    box-shadow: ${pxToRem(1)} ${pxToRem(1)} ${pxToRem(10)} ${colors.dropShadowColor}, 0 0 ${pxToRem(1)} ${colors.dropShadowColor};
    height: ${pxToRem(32)};
    width: ${pxToRem(32)};
    border-radius: 50%;
    background: ${colors.white};
    cursor: pointer;
    height: ${pxToRem(5)};
  }
  &:focus::-ms-fill-lower {
    background: ${colors.info};
  }
  &:focus::-ms-fill-upper {
    background: ${colors.info};
  }

  &:disabled {
     opacity: ${defaultStyles.disabledOpacity};
  }
`;

// Textarea

const TextAreaClass = css`
  box-sizing: border-box;
  background: ${colors.white};
  min-width: ${pxToRem(240)};
  max-width: 100%;
  height: 6rem;
  padding: 0.625rem;
  border: ${pxToRem(1)} solid ${colors.gray2};
  border-radius: ${pxToRem(3)};
  font-family: ${typography.baseFontFamily};
  font-size: 1rem;
  outline: none;
  
  &:focus {
    border-color: ${colors.info};
  }
  
  &:disabled {
    background: ${colors.gray6};
    cursor: not-allowed;
  }
`;

// Select

const caretIcon = encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="${colors.gray1}" d="M32 9c0 .5-.2 1-.6 1.4l-14 14c-.4.4-.9.6-1.4.6s-1-.2-1.4-.6l-14-14C.2 10 0 9.5 0 9s.2-1 .6-1.4S1.5 7 2 7h28c.5 0 1 .2 1.4.6s.6.9.6 1.4z"/></svg>`);

const SelectClass = css`
  margin: 0 0 1.5rem;
  position: relative;
  box-sizing: border-box;
  background: url('data:image/svg+xml;charset=utf-8,${caretIcon}') 95% / 6% no-repeat ${colors.white};
  appearance: none;
  min-width: ${pxToRem(240)};
  max-width: 100%;
  padding: 0.625rem;
  border: ${pxToRem(1)} solid ${colors.gray2};
  border-radius: ${pxToRem(3)};
  font-family: ${typography.baseFontFamily};
  font-size: 1rem;
  cursor: pointer;
  outline: none;

  &:focus {
    border-color: ${colors.info};
  }
    
  &:disabled {
    background: ${colors.gray6};
    cursor: not-allowed;
  }
`;

// Radio + Checkbox

const radioCheckboxBase = css`
  position: absolute;
  outline: none;
  opacity: 0;

  &:checked + label::after {
    opacity: 1;
  }

  + label {
    position: relative;
    padding: ${pxToRem(8)} 0 ${pxToRem(8)} ${pxToRem(28)};
    cursor: pointer;
  }

  + label::before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 0;
    width: ${pxToRem(20)};
    height: ${pxToRem(20)};
    transform: translate(0, -50%);
    opacity: 1;
  }

  + label::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: ${pxToRem(20)};
    height: ${pxToRem(20)};
    line-height: ${pxToRem(20)};
    transform: translate(0, -50%);
    text-align: center;
    opacity: 0;
  }

  &:disabled + label {
    opacity: ${defaultStyles.disabledOpacity};
    cursor: not-allowed;
  }
`;

const radioCheckboxLabelBase = css`
  margin: 0 1rem 0 0;
  
  &::before,
  &::after {
    transition: background ${defaultStyles.transitionSpeed} ease;
  }
`;

// Radio

const radioUnselectedIcon = encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8.9" fill="${colors.white}"/><path d="M10 19.9c5.5 0 10-4.4 9.9-9.9 0-5.4-4.4-9.9-9.9-9.9C4.6.1.1 4.5.1 10c0 5.4 4.4 9.9 9.9 9.9zm0-18.8c5 0 8.9 4 8.9 8.9s-4 8.9-8.9 8.9-8.9-4-8.9-8.9 4-8.9 8.9-8.9z" fill="${colors.gray1}"/></svg>`);

const radioUnselectedHoverIcon = encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8.9" fill="${colors.white}"/><path d="M10 19.9c5.5 0 10-4.4 9.9-9.9 0-5.4-4.4-9.9-9.9-9.9C4.6.1.1 4.5.1 10c0 5.4 4.4 9.9 9.9 9.9zm0-18.8c5 0 8.9 4 8.9 8.9s-4 8.9-8.9 8.9-8.9-4-8.9-8.9 4-8.9 8.9-8.9z" fill="${colors.info}"/></svg>`);

const radioSelectedIcon = encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><circle cx="10" cy="10" r="3.5" fill="${colors.white}"/><path d="M10 19.9c5.5 0 10-4.4 9.9-9.9 0-5.4-4.4-9.9-9.9-9.9C4.6.1.1 4.5.1 10c0 5.4 4.4 9.9 9.9 9.9zm0-13.4c1.9 0 3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5-3.5-1.6-3.5-3.5S8.1 6.5 10 6.5z" fill="${colors.success}"/></svg>`);

const radioSelectedHoverIcon = encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><circle cx="10" cy="10" r="3.5" fill="${colors.white}"/><path d="M10 19.9c5.5 0 10-4.4 9.9-9.9 0-5.4-4.4-9.9-9.9-9.9C4.6.1.1 4.5.1 10c0 5.4 4.4 9.9 9.9 9.9zm0-13.4c1.9 0 3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5-3.5-1.6-3.5-3.5S8.1 6.5 10 6.5z" fill="${successHover}"/></svg>`);

const RadioClass = css`
  ${radioCheckboxBase};
  
  &:hover + label::before,
  &:focus + label::before {
    background: url('data:image/svg+xml;charset=utf8,${radioUnselectedHoverIcon}') 0 center no-repeat;
  }

  &:hover + label::after,
  &:focus + label::after {
    background: url('data:image/svg+xml;charset=utf8,${radioSelectedHoverIcon}') 0 center no-repeat;
  }
`;

const RadioLabelClass = css`
  ${radioCheckboxLabelBase};

  &::before {
    background: url('data:image/svg+xml;charset=utf-8,${radioUnselectedIcon}') 0 center no-repeat;
  }

  &::after {
    background: url('data:image/svg+xml;charset=utf-8,${radioSelectedIcon}') 0 center no-repeat;
  }
`;

// Checkbox

const checkboxUnselectedIcon = encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M17 1H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z" fill="${colors.white}"/><path d="M17 0H3C1.3 0 0 1.4 0 3v14c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V3c0-1.6-1.3-3-3-3zm2 17c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v14z" fill="${colors.gray1}"/></svg>`);

const checkboxUnselectedHoverIcon = encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M17 0H3C1.3 0 0 1.4 0 3v14c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V3c0-1.6-1.3-3-3-3z" fill="${colors.info}"/><path d="M19 17c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v14z" fill="${colors.white}"/></svg>`);

const checkboxSelectedIcon = encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M15.3 5.2c-.3-.2-.6-.2-.9 0L9 12.3 5.7 9.7c-.3-.2-.6-.2-.9 0l-.6.5c-.3.3-.3.6 0 .8l4.4 3.8c.1.1.2.2.4.2s.4-.1.5-.2l6.4-8.3c.1-.1.1-.5 0-.8l-.6-.5z" fill="${colors.white}"/><path d="M17 0H3C1.3 0 0 1.4 0 3v14c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V3c0-1.6-1.3-3-3-3zm-1.1 6.5l-6.4 8.3c-.1.1-.3.2-.5.2s-.3-.1-.4-.2L4.2 11c-.3-.2-.3-.5 0-.8l.6-.5c.3-.2.6-.2.9 0L9 12.3l5.4-7.1c.3-.2.6-.2.9 0l.6.5c.1.3.1.7 0 .8z" fill="${colors.success}"/></svg>`);

const checkboxSelectedHoverIcon = encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M15.3 5.2c-.3-.2-.6-.2-.9 0L9 12.3 5.7 9.7c-.3-.2-.6-.2-.9 0l-.6.5c-.3.3-.3.6 0 .8l4.4 3.8c.1.1.2.2.4.2s.4-.1.5-.2l6.4-8.3c.1-.1.1-.5 0-.8l-.6-.5z" fill="${colors.white}"/><path d="M17 0H3C1.3 0 0 1.4 0 3v14c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V3c0-1.6-1.3-3-3-3zm-1.1 6.5l-6.4 8.3c-.1.1-.3.2-.5.2s-.3-.1-.4-.2L4.2 11c-.3-.2-.3-.5 0-.8l.6-.5c.3-.2.6-.2.9 0L9 12.3l5.4-7.1c.3-.2.6-.2.9 0l.6.5c.1.3.1.7 0 .8z" fill="${successHover}"/></svg>`);

const checkIcon = encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M15.3 5.2c-.3-.2-.6-.2-.9 0L9 12.3 5.7 9.7c-.3-.2-.6-.2-.9 0l-.6.5c-.3.3-.3.6 0 .8l4.4 3.8c.1.1.2.2.4.2s.4-.1.5-.2l6.4-8.3c.1-.1.1-.5 0-.8l-.6-.5z" fill="${colors.white}"/></svg>`);

const CheckboxClass = css`
  ${radioCheckboxBase};
  
  &:hover + label::before,
  &:focus + label::before {
    background: url('data:image/svg+xml;charset=utf8,${checkboxUnselectedHoverIcon}') 0 center no-repeat;
  }

  &:hover + label::after,
  &:focus + label::after {
    background: url('data:image/svg+xml;charset=utf8,${checkboxSelectedHoverIcon}') 0 center no-repeat;
  }
`;

const CheckboxLabelClass = css`
  ${radioCheckboxLabelBase};

  &::before {
    background: url('data:image/svg+xml;charset=utf8,${checkboxUnselectedIcon}') 0 center no-repeat;
  }
  
  &::after {
    background: url('data:image/svg+xml;charset=utf8,${checkboxSelectedIcon}') 0 center no-repeat;
  }
`;

const ToggleClass = css`
  width: ${pxToRem(0.1)};
  height: ${pxToRem(0.1)};
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;

  + label {
    display: block;
    text-indent: ${defaultStyles.invisibleTextIndent};
    position: relative;
    cursor: pointer;
    outline: none;
    width: ${pxToRem(68)};
    height: ${pxToRem(34)};
    padding: 0;
    border-radius: ${pxToRem(2)};
    background-color: ${colors.gray4};
    transition: background ${defaultStyles.transitionSpeed} ease;

    &::before,
    &::after {
      content: "";
      display: block;
      position: absolute;
    }

    // Thumb
    &::before {
      top: 50%;
      left: 5%;
      transform: translate(0, -50%);
      width: ${pxToRem(26)};
      height: ${pxToRem(26)};
      background-color: ${colors.white};
      border: ${pxToRem(1)} solid transparent;
      border-radius: ${pxToRem(2)};
      box-shadow: ${pxToRem(1)} ${pxToRem(1)} ${pxToRem(10)} ${colors.dropShadowColor}, 0 0 ${pxToRem(1)} ${colors.dropShadowColor};
      transition: all ${defaultStyles.transitionSpeed} ease;
    }

    // Indicator
    &::after {
      opacity: 0;
      top: 50%;
      left: ${pxToRem(3)};
      transform: translate(50%, -50%);
      width: 1rem;
      height: 1rem;
      background: url('data:image/svg+xml;charset=utf8,${checkIcon}') 0 center no-repeat;
    }
  }

  &:hover + label::before,
  &:focus + label::before {
    border-color: ${colors.info};
  }

  &:checked + label {
    background-color: ${colors.success};

    &::before {
      left: 95%;
      transform: translate(-100%, -50%);
    }
    &::after {
      transition: opacity ${defaultStyles.transitionSpeed} ease;
      opacity: 1;
    }
  }

  &:disabled + label {
    opacity: 0.5;
    cursor: default;
  }
`;

// Submit

const SubmitClass = ButtonAccentClass;

// Reset

const ResetClass = ButtonClass;

// Form Groups styles

const verticalFormGroupClass = css`
  display: flex;
  flex-direction: column;
`;

const horizontalFormGroupClass = css`
`;

const inputValidClass = css`
  margin: 0 0 0.25rem;
  border-color: ${colors.success};
`;

const inputValidHintClass = css`
  margin: 0 0 1rem;
  font-size: ${pxToRem(14)};
  color: ${colors.success};
`;

const inputInvalidClass = css`
  margin: 0 0 0.25rem;
  border-color: ${colors.error};
`;

const inputInvalidHintClass = css`
  margin: 0 0 1rem;
  font-size: ${pxToRem(14)};
  color: ${colors.error};
`;

export {
  FieldsetClass,
  LegendClass,
  LabelClass,
  TextInputClass,
  FileInputClass,
  FileInputLabelClass,
  RangeInputClass,
  TextAreaClass,
  SelectClass,
  RadioClass,
  RadioLabelClass,
  CheckboxClass,
  CheckboxLabelClass,
  ToggleClass,
  SubmitClass,
  ResetClass,
  verticalFormGroupClass,
  horizontalFormGroupClass,
  inputValidClass,
  inputInvalidClass,
  inputValidHintClass,
  inputInvalidHintClass,
};
