import { configure, addDecorator } from '@storybook/angular';
import { withOptions } from '@storybook/addon-options';

addDecorator(
  withOptions({
    name: 'NG-UI Angular',
    url: 'https://github.com/Frequence/frequence-ui-kit'
  })
);
require('../projects/index.stories');
// automatically import all files ending in *.stories.ts
const req = require.context('../projects', true, /\.stories\.ts$/);
function loadStories() {
  req
    .keys()
    .sort((path1, path2) => (path1.split('/').slice(-1)[0] > path2.split('/').slice(-1)[0] ? 1 : -1))
    .forEach(filename => {
      if (!filename.includes('index')) {
        req(filename);
      }
    });
}

configure(loadStories, module);
