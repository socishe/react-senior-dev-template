const fs = require("fs");
const path = require("path");

if (process.argv.length !== 4) {
  throw new Error("Wrong number of arguments. Please provide the type of component and the path");
}

const componentType = process.argv[2];
const componentPath = path.join("src", process.argv[3]);

const componentName = path.basename(componentPath);
const componentDir = path.dirname(componentPath);

let pathToGlobal = 'scss/global.scss';
let componentDirArray = componentDir.split(path.sep);
for (let i = 0; i < componentDirArray.length; i++){
    pathToGlobal = '../'+ pathToGlobal;
}

let componentTemplate;

if (componentType === "fc") {
  componentTemplate = `
import React from 'react';
import './${componentName}.scss';

const ${componentName} = () => {
  return (
    <div>
      ${componentName} component
    </div>
  );
}

export default ${componentName};
`;
} else if (componentType === "cc") {
  componentTemplate = `
import React, { Component } from 'react';
import './${componentName}.scss';

class ${componentName} extends Component {
  render() {
    return (
      <div>
        ${componentName} component
      </div>
    );
  }
}

export default ${componentName};
`;
}

if (!fs.existsSync(componentDir)) {
  fs.mkdirSync(componentDir);
}

fs.writeFileSync(`${componentPath}.tsx`, componentTemplate);
fs.writeFileSync(`${componentPath}.scss`, `@import '${pathToGlobal}';`);
fs.writeFileSync(
  `${componentPath}.md`,
  "# ${componentName} component documentation"
);
console.log(
  `Successfully created ${componentType} component at ${componentPath}`
);
