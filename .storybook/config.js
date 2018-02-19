import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

// Option defaults:
setOptions({
  name: 'Sumi Storybook',
  url: 'https://github.com/elishaterada/sumi',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
  sortStoriesByKind: true,
  hierarchySeparator: null,
  sidebarAnimations: true,
  selectedAddonPanel: undefined, // The order of addons in the "Addons Panel" is the same as you import them in 'addons.js'. The first panel will be opened by default as you run Storybook
});

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
