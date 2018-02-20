import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { setDefaults } from '@storybook/addon-info';

// Option defaults:
setOptions({
  name: 'Sumi Storybook',
  url: 'https://github.com/elishaterada/sumi',
  goFullScreen: false,
  showStoriesPanel: true,
  showAddonPanel: false,
  showSearchBox: false,
  addonPanelInRight: false,
  sortStoriesByKind: true,
  hierarchySeparator: null,
  sidebarAnimations: true,
  selectedAddonPanel: undefined, // The order of addons in the "Addons Panel" is the same as you import them in 'addons.js'. The first panel will be opened by default as you run Storybook
});

setDefaults({
  header: true, // Toggles display of header with component name and description
  inline: true, // Displays info inline vs click button to view
  source: false, // Displays the source of story Component,
  propTablesExclude: []
});

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories.js$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
