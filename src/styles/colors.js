// Resources
// https://webaim.org/resources/contrastchecker/
// http://chir.ag/projects/name-that-color/

const descriptiveColors = {
  mineShaft: '#333333',
  doveGray: '#666666',
  dustyGray: '#999999',
  silver: '#cccccc',
  mercury: '#e6e6e6',
  concrete: '#f2f2f2',
  fruitSalad: '#4CAF50',
  pomegranate: '#F44336',
  orangePeel: '#FF9800',
  dodgerBlue: '#2196F3',
};

const colors = {};

colors.black = '#000000';
colors.white = '#ffffff';

colors.gray1 = descriptiveColors.mineShaft;
colors.gray2 = descriptiveColors.doveGray;
colors.gray3 = descriptiveColors.dustyGray;
colors.gray4 = descriptiveColors.silver;
colors.gray5 = descriptiveColors.mercury;
colors.gray6 = descriptiveColors.concrete;

colors.primaryColor = colors.gray1;
colors.secondaryColor = colors.gray2;
colors.success = descriptiveColors.fruitSalad;
colors.error = descriptiveColors.pomegranate;
colors.warning = descriptiveColors.orangePeel;
colors.information = descriptiveColors.dodgerBlue;
colors.dropShadowColor = 'rgba(0, 0, 0, 0.15)';
colors.defaultBorderColor = colors.gray1;

export default colors;
