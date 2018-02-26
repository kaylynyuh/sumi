// Resources
// https://github.com/svg/svgo
// https://css-tricks.com/probably-dont-base64-svg/

import colors from './colors';

const icons = {
  sumi: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.4 16.1c-3.3 3.6-9.1 3.8-12.7.5S3.9 7.5 7.2 3.8c2.4-2.6 5.9-3.4 9.1-2.5C12.1-.4 6.9.6 3.6 4.1-.7 8.7-.5 16 4.2 20.4s11.9 4.1 16.3-.6c3.3-3.6 3.9-8.8 1.9-12.9 1 3 .4 6.6-2 9.2z" fill="${colors.primaryColor}" /></svg>`,
  github: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 .8C5.6.8.5 5.9.5 12.3c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.6-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.2 3.3 1 .1-.7.4-1.2.7-1.5-2.6-.3-5.2-1.3-5.2-5.7 0-1.3.4-2.3 1.2-3.1-.2-.4-.6-1.6.1-3.1 0 0 1-.3 3.2 1.2.8-.3 1.8-.5 2.8-.5 1 0 2 .1 2.9.4C17.1 5.2 18 5.6 18 5.6c.6 1.6.2 2.8.1 3 .7.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.1v3.2c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.9 18.4.8 12 .8z" fill-rule="evenodd" clip-rule="evenodd" fill="#181616"/></svg>',
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
