const xmlParser = require('xml2json');
const fs = require('fs-extra');


var fileReader = function (svgFilePath) {
  var file = fs.readFileSync(svgFilePath, 'utf8');
  var jsonData = JSON.parse(xmlParser.toJson(file));
  return jsonData;
}

module.exports = fileReader;
