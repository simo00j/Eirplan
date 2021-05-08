const xmlParser = require('xml2json');
const fs = require('fs');

// read with fs the downloaded files 
var fileReader = function (svgFile) {
  var file = fs.readFileSync(svgFile, 'utf8');
  var jsonData = JSON.parse(xmlParser.toJson(file));
  return jsonData;
}

module.exports = fileReader;
