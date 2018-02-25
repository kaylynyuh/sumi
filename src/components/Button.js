import { css } from 'emotion';

import colors from '../styles/colors';
import typography, { pxToRem } from '../styles/typography';

const ButtonClass = css`
  display: inline-block;
  background: ${colors.white};
  position: relative;
  margin: 0;
  padding: 0 ${pxToRem(25)};
  height: ${pxToRem(40)};
  line-height: ${pxToRem(40)};
  box-shadow: 0 ${pxToRem(2)} ${pxToRem(5)} ${colors.dropShadowColor};
  border: ${pxToRem(1)} solid ${colors.doveGray};
  cursor: pointer;
  box-sizing: content-box;
  border-radius: ${pxToRem(2)};
  text-decoration: none;
  font-size: ${pxToRem(16)};
  font-weight: ${typography.fontWeightRegular};
  color: ${colors.primaryColor};
  
  &:hover {
    background: ${colors.concrete};
  }
  
  &:active {
    box-shadow: 0 0 ${pxToRem(5)} ${colors.dropShadowColor};
  }
`;

export default ButtonClass;
