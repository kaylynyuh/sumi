const typography = {
  sansSerifFontFamily: 'Roboto, sans-serif',
  serifFontFamily: 'Bellefair, serif',
  baseFontSize: '16', // in px
  fontWeightRegular: '400',
  fontWeightMedium: '500',
  fontWeightSemiBold: '600',
  fontWeightBold: '700',
};

typography.baseFontFamily = typography.sansSerifFontFamily;

const pxToRem = (px) => {
  const value = px / typography.baseFontSize;
  return `${value}rem`;
};

export default typography;
export { pxToRem };
