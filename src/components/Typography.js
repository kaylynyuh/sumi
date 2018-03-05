import { css } from 'emotion';

import colors from '../styles/colors';
import typography, { pxToRem } from '../styles/typography';

const Heading1Class = css`
  margin: 0 0 1rem 0;
  display: inline-block;
  font-size: ${pxToRem(20)};
  line-height: 1.2;
  font-weight: ${typography.fontWeightRegular};
  text-transform: uppercase;
  color: ${typography.primaryColor};
  letter-spacing: ${pxToRem(2)};
`;

const Heading1FancyClass = css`
  ${Heading1Class};
  font-family: ${typography.serifFontFamily};
  border-bottom: ${pxToRem(1)} solid ${colors.gray3};
`;

const Heading2Class = css`
  margin: 0 0 1rem 0;
  font-size: ${pxToRem(28)};
  line-height: 1.2;
  font-weight: ${typography.fontWeightRegular};
  color: ${typography.primaryColor};
  letter-spacing: ${pxToRem(1)};
`;

const Heading2FancyClass = css`
  ${Heading2Class};
  font-family: ${typography.serifFontFamily};
  font-style: italic;
  letter-spacing: ${pxToRem(2)};
`;

const Heading3Class = css`
  margin: 0 0 1rem 0;
  font-size: ${pxToRem(18)};
  line-height: 1.2;
  font-weight: ${typography.fontWeightSemiBold};
  color: ${typography.primaryColor};
  letter-spacing: ${pxToRem(1)};
`;

const Heading3FancyClass = css`
  ${Heading3Class};
  font-size: ${pxToRem(22)};
  font-weight: ${typography.fontWeightRegular};
  font-family: ${typography.serifFontFamily};
`;

const Heading4Class = css`
  margin: 0 0 1rem 0;
  font-size: ${pxToRem(16)};
  font-weight: ${typography.fontWeightSemiBold};
  line-height: 1.2;
  color: ${colors.gray2};
  letter-spacing: ${pxToRem(1)};
`;

const Heading4FancyClass = css`
  ${Heading4Class};
  font-size: ${pxToRem(18)};
  font-weight: ${typography.fontWeightRegular};
  font-family: ${typography.serifFontFamily};
`;

const Heading5Class = css`
  margin: 0 0 1rem 0;
  font-size: ${pxToRem(16)};
  line-height: 1.2;
  font-weight: ${typography.fontWeightSemiBold};
  color: ${colors.gray2};
  letter-spacing: ${pxToRem(1)};
`;

const Heading5FancyClass = css`
  ${Heading5Class};
  font-size: ${pxToRem(18)};
  font-weight: ${typography.fontWeightRegular};
  font-family: ${typography.serifFontFamily};
`;

const ParagraphClass = css`
  margin: 0 0 1rem;
  line-height: 1.6;
  font-size: 1rem;
  font-weight: ${typography.fontWeightRegular};
  color: ${typography.primaryColor};
  
  + h1,
  + h2, 
  + h3, 
  + h4, 
  + h5 {
    margin-top: 2rem;
  }
`;

const ParagraphFancyClass = css`
  ${ParagraphClass};
  line-height: 2;
`;

export {
  Heading1Class,
  Heading1FancyClass,
  Heading2Class,
  Heading2FancyClass,
  Heading3Class,
  Heading3FancyClass,
  Heading4Class,
  Heading4FancyClass,
  Heading5Class,
  Heading5FancyClass,
  ParagraphClass,
  ParagraphFancyClass,
};
