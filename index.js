const fs = require('fs');
const path = require('path');
const svg2jsx = require('@balajmarius/svg2jsx');

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

fs.readdir('./images', (err, files) => {
  files.forEach(async filePath => {
    const fileName = capitalizeFirstLetter(filePath.split('.')[0]);
    const data = fs.readFileSync(`./images/${filePath}`, 'utf8');
    const transformedSVG = await svg2jsx(data);
    fs.writeFileSync(`./results/${fileName}.jsx`, transformedSVG);
    console.log(filePath);
  });
});