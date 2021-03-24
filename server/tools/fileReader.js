const xmlParser = require('xml2json');
const fs = require('fs');


var fileReader = function (svgFile) {
  data=svgFile.data.toString('utf8');
  var jsonData = JSON.parse(xmlParser.toJson(data));
  return jsonData;
}

module.exports = fileReader;
