// Resources
// https://github.com/svg/svgo
// https://css-tricks.com/probably-dont-base64-svg/

import colors from './colors';

const icons = {
  sumi: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.4 16.1c-3.3 3.6-9.1 3.8-12.7.5S3.9 7.5 7.2 3.8c2.4-2.6 5.9-3.4 9.1-2.5C12.1-.4 6.9.6 3.6 4.1-.7 8.7-.5 16 4.2 20.4s11.9 4.1 16.3-.6c3.3-3.6 3.9-8.8 1.9-12.9 1 3 .4 6.6-2 9.2z" fill="${colors.primaryColor}" /></svg>`,
};

const Icon = (svg, color) => {
  let iconData = svg;

  if (color) {
    const defaultColorMatch = new RegExp(colors.primaryColor, 'g');
    iconData = iconData.replace(defaultColorMatch, color);
  }

  // Generate valid XML data
  iconData = encodeURIComponent(iconData);

  // Append repeated prefix
  iconData = `data:image/svg+xml;charset=utf8,${iconData}`;

  return iconData;
};

export default icons;
export { Icon };
