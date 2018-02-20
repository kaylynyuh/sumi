import { css } from 'emotion';

import colors from '../styles/colors';
import typography, { pxToRem } from '../styles/typography';

const Heading1Class = css`
  margin: 0 0 1rem 0;
  display: inline-block;
  border-bottom: ${pxToRem(1)} solid ${colors.dustyGray};
  font-family: ${typography.serifFontFamily};
  font-size: ${pxToRem(20)};
  line-height: 1.2;
  font-weight: ${typography.fontWeightRegular};
  text-transform: uppercase;
  color: ${typography.primaryColor};
  letter-spacing: ${pxToRem(2)};
`;

const Heading2Class = css`
  margin: 0 0 1rem 0;
  font-family: ${typography.serifFontFamily};
  font-size: ${pxToRem(32)};
  line-height: 1.2;
  font-weight: ${typography.fontWeightRegular};
  color: ${typography.primaryColor};
  letter-spacing: ${pxToRem(2)};
  font-style: italic;
`;

const Heading3Class = css`
  margin: 0 0 1rem 0;
  font-family: ${typography.baseFontFamily};
  font-size: ${pxToRem(18)};
  line-height: 1.2;
  font-weight: ${typography.fontWeightLight};
  color: ${typography.primaryColor};
  letter-spacing: ${pxToRem(1)};
`;

const Heading4Class = css`
  margin: 0 0 1rem 0;
  font-family: ${typography.baseFontFamily};
  font-size: ${pxToRem(14)};
  line-height: 1.2;
  font-weight: ${typography.fontWeightRegular};
  color: ${typography.secondaryColor}
`;

const Heading5Class = css`
  margin: 0 0 1rem 0;
  font-family: ${typography.baseFontFamily};
  font-size: ${pxToRem(14)};
  line-height: 1.2;
  font-weight: ${typography.fontWeightRegular};
  color: ${typography.secondaryColor}
`;

export {
  Heading1Class,
  Heading2Class,
  Heading3Class,
  Heading4Class,
  Heading5Class,
};
