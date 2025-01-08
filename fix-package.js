const fs = require('fs');
const path = require('path');

const packagePath = path.resolve(__dirname, '../angular-material-components/dist/@angular-material-components/datetime-picker/package.json');

if (!fs.existsSync(packagePath)) {
  console.error(`File not found: ${packagePath}.`);
  process.exit(1);
}

const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

packageJson.peerDependencies = {
  "@angular/animations": "^15.0.0 || ^16.0.0 || ^18.0.0",
  "@angular/cdk": "^15.0.0 || ^16.0.0 || ^18.0.0",
  "@angular/common": "^15.0.0 || ^16.0.0 || ^18.0.0",
  "@angular/compiler": "^15.0.0 || ^16.0.0 || ^18.0.0",
  "@angular/core": "^15.0.0 || ^16.0.0 || ^18.0.0",
  "@angular/forms": "^15.0.0 || ^16.0.0 || ^18.0.0",
  "@angular/material": "^15.0.0 || ^16.0.0 || ^18.0.0",
  "@angular/platform-browser": "^15.0.0 || ^16.0.0 || ^18.0.0",
  "@angular/platform-browser-dynamic": "^15.0.0 || ^16.0.0 || ^18.0.0",
  "@angular/router": "^15.0.0 || ^16.0.0 || ^18.0.0",
  "rxjs": "^6.6.3 || ^7.8.0"
};

fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
console.log('Updated peerDependencies in package.json');
