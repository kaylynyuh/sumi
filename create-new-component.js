const fs = require('fs-extra');
const replace = require('replace-in-file');

const infoColor = '\x1b[36m%s\x1b[0m';
const pathColor = '\x1b[33m%s\x1b[0m: ';

const componentName = process.argv[2];

if (!process.argv[2]) {
  console.error('Please enter your component name after the command like: NewComponentName');
  process.exit(1);
}

function replaceBoilerplate(path) {
  replace({
    files: path,
    from: /Boilerplate/g,
    to: componentName,
  })
    .then()
    .catch(error => console.error('Error occurred:', error));
}

console.log(infoColor, 'Following files are being created:');

// Main component file
const mainComponentFilePath = `./src/components/${componentName}.js`;

fs.copy('./boilerplate/Boilerplate.js', mainComponentFilePath)
  .then(() => {
    replaceBoilerplate(mainComponentFilePath);
    console.log(pathColor, mainComponentFilePath);
  })
  .catch(err => console.error(err));

// Story file
// const storyFilePath = `./stories/${componentName}.story.js`;
//
// fs.copy('./boilerplate/Boilerplate.story.js', storyFilePath)
//   .then(() => {
//     replaceBoilerplate(storyFilePath);
//     console.log(pathColor, storyFilePath);
//   })
//   .catch(err => console.error(err));

// Test (Jest) file
const testFilePath = `./__tests__/${componentName}.test.js`;

fs.copy('./boilerplate/Boilerplate.jest.js', testFilePath)
  .then(() => {
    replaceBoilerplate(testFilePath);
    console.log(pathColor, testFilePath);
  })
  .catch(err => console.error(err));
