const typography = {
  baseFontFamily: 'Roboto, sans-serif',
  baseFontSize: '16', // in px
  fontWeightRegular: '400',
  fontWeightMedium: '500',
  fontWeightSemiBold: '600',
  fontWeightBold: '700',
};

const pxToRem = (px) => {
  const value = px / typography.baseFontSize;
  return `${value}rem`;
};

export default typography;
export { pxToRem };
