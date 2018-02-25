import colors from './colors';

const icons = {
  sumi: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.8 16.3c-3.5 3.8-9.5 4-13.3.5S3.5 7.3 7 3.5C9.5.8 13.2-.1 16.5.9 12.1-.9 6.7.1 3.2 3.8c-4.5 4.8-4.3 12.4.6 17s12.4 4.3 17-.6c3.5-3.8 4.1-9.2 2-13.5 1.1 3.2.5 6.9-2 9.6z" fill="${colors.primaryColor}" /></svg>`,
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
