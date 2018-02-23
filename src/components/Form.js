import { css } from 'emotion';

import colors from '../styles/colors';
import { pxToRem } from '../styles/typography';

const caretIcon = encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="${colors.mineShaft}" d="M32 9c0 .5-.2 1-.6 1.4l-14 14c-.4.4-.9.6-1.4.6s-1-.2-1.4-.6l-14-14C.2 10 0 9.5 0 9s.2-1 .6-1.4S1.5 7 2 7h28c.5 0 1 .2 1.4.6s.6.9.6 1.4z"/></svg>`);

const radioUnselectedIcon = encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8.9" fill="${colors.white}"/><path fill="${colors.mineShaft}" d="M10 19.9c5.5 0 10-4.4 9.9-9.9 0-5.4-4.4-9.9-9.9-9.9C4.6.1.1 4.5.1 10c0 5.4 4.4 9.9 9.9 9.9zm0-18.8c5 0 8.9 4 8.9 8.9s-4 8.9-8.9 8.9-8.9-4-8.9-8.9 4-8.9 8.9-8.9z"/></svg>`);

const radioSelectedIcon = encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><circle cx="10" cy="10" r="3.5" fill="${colors.white}"/><path fill="${colors.mineShaft}" d="M10 19.9c5.5 0 10-4.4 9.9-9.9 0-5.4-4.4-9.9-9.9-9.9C4.6.1.1 4.5.1 10c0 5.4 4.4 9.9 9.9 9.9zm0-13.4c1.9 0 3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5-3.5-1.6-3.5-3.5S8.1 6.5 10 6.5z"/></svg>`);

const radioHoverIcon = encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8.9" fill="${colors.mercury}"/><path fill="${colors.mineShaft}" d="M10 19.9c5.5 0 10-4.4 9.9-9.9 0-5.4-4.4-9.9-9.9-9.9C4.6.1.1 4.5.1 10c0 5.4 4.4 9.9 9.9 9.9zm0-18.8c5 0 8.9 4 8.9 8.9s-4 8.9-8.9 8.9-8.9-4-8.9-8.9 4-8.9 8.9-8.9z"/></svg>`);

const checkboxUnselectedIcon = encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M17 1H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z" fill="${colors.white}"/><path d="M17 0H3C1.3 0 0 1.4 0 3v14c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V3c0-1.6-1.3-3-3-3zm2 17c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v14z" fill="${colors.mineShaft}" /></svg>`);

const checkboxSelectedIcon = encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M15.3 5.2c-.3-.2-.6-.2-.9 0L9 12.3 5.7 9.7c-.3-.2-.6-.2-.9 0l-.6.5c-.3.3-.3.6 0 .8l4.4 3.8c.1.1.2.2.4.2s.4-.1.5-.2l6.4-8.3c.1-.1.1-.5 0-.8l-.6-.5z" fill="${colors.white}"/><path d="M17 0H3C1.3 0 0 1.4 0 3v14c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V3c0-1.6-1.3-3-3-3zm-1.1 6.5l-6.4 8.3c-.1.1-.3.2-.5.2s-.3-.1-.4-.2L4.2 11c-.3-.2-.3-.5 0-.8l.6-.5c.3-.2.6-.2.9 0L9 12.3l5.4-7.1c.3-.2.6-.2.9 0l.6.5c.1.3.1.7 0 .8z" fill="${colors.mineShaft}"/></svg>`);

const checkboxHoverIcon = encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M17 0H3C1.3 0 0 1.4 0 3v14c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V3c0-1.6-1.3-3-3-3z"/><path d="M19 17c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v14z" fill="${colors.mercury}"/></svg>`);

const FieldsetClass = css`
  margin: 0 0 2rem;
  padding: 0;
  border: 0;
`;

const LabelClass = css`
  display: block;
  margin-bottom: 0.5rem;
  color: ${colors.primaryColor};
  font-size: ${pxToRem(14)};
`;

const TextInputClass = css`
  box-sizing: border-box;
  background: ${colors.white};
  min-width: ${pxToRem(240)};
  max-width: 100%;
  padding: 0.625rem;
  border: ${pxToRem(1)} solid ${colors.doveGray};
  border-radius: ${pxToRem(3)};
  font-size: 1rem;
`;

const TextAreaClass = css`
  box-sizing: border-box;
  background: ${colors.white};
  min-width: ${pxToRem(240)};
  max-width: 100%;
  height: 6rem;
  padding: 0.625rem;
  border: ${pxToRem(1)} solid ${colors.doveGray};
  border-radius: ${pxToRem(3)};
  font-size: 1rem;
`;

const SelectClass = css`
  position: relative;
  box-sizing: border-box;
  background: url('data:image/svg+xml;charset=utf-8,${caretIcon}') 95% / 6% no-repeat ${colors.white};
  appearance: none;
  min-width: ${pxToRem(240)};
  max-width: 100%;
  padding: 0.625rem;
  border: ${pxToRem(1)} solid ${colors.doveGray};
  border-radius: ${pxToRem(3)};
  font-size: 1rem;
`;

const radioCheckboxBase = css`
  position: absolute;
  outline: none;
  opacity: 0;

  &:checked {
    + label:after {
      opacity: 1;
    }
  }

  + label {
    position: relative;
    padding-left: ${pxToRem(28)};
    cursor: pointer;
  }
  
  + label:before {
    position: absolute;
    left: 0;
    top: ${pxToRem(-1)};
    width: ${pxToRem(20)};
    height: ${pxToRem(20)};
    display: block;
    content: '';
  }

  + label:after {
    position: absolute;
    top: ${pxToRem(-1)};
    left: 0;
    width: ${pxToRem(20)};
    height: ${pxToRem(20)};
    line-height: ${pxToRem(20)};
    text-align: center;
    opacity: 0;
    content: '';
  }
`;

const radioCheckboxLabelBase = css`
  margin: 0 1rem 1rem 0;
  
  &:last-of-type {
    margin: 0 1rem 0 0;
  }
`;

const RadioClass = css`
  ${radioCheckboxBase};
  
  &:hover,
  &:focus {
    + label:before {
      background: url('data:image/svg+xml;charset=utf-8,${radioHoverIcon}');
    }
  }
`;

const RadioLabelClass = css`
  ${radioCheckboxLabelBase};

  &:before {
    background: url('data:image/svg+xml;charset=utf-8,${radioUnselectedIcon}') 0 center no-repeat;
  }

  &:after {
    background: url('data:image/svg+xml;charset=utf-8,${radioSelectedIcon}') 0 center no-repeat;
  }
`;

const CheckboxClass = css`
  ${radioCheckboxBase};
  
  &:hover,
  &:focus {
    + label:before {
      background: url('data:image/svg+xml;charset=utf8,${checkboxHoverIcon}');
    }
  }
`;

const CheckboxLabelClass = css`
  ${radioCheckboxLabelBase};

  &:before {
    background: url('data:image/svg+xml;charset=utf8,${checkboxUnselectedIcon}') 0 center no-repeat;
  }

  &:after {
    background: url('data:image/svg+xml;charset=utf8,${checkboxSelectedIcon}') 0 center no-repeat;
  }
`;

const verticalFormGroupClass = css`
  display: flex;
  flex-direction: column;
`;

const horizontalFormGroupClass = css`
`;

export {
  FieldsetClass,
  LabelClass,
  TextInputClass,
  TextAreaClass,
  SelectClass,
  RadioClass,
  RadioLabelClass,
  CheckboxClass,
  CheckboxLabelClass,
  verticalFormGroupClass,
  horizontalFormGroupClass,
};
