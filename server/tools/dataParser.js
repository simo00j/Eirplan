var xmlParser = require('xml2json');
const toPath = require('element-to-path');
var fs = require('fs-extra');


var svgFileReader = function (svgFilePath) {
  var svgFile = fs.readFileSync(svgFilePath, 'utf8');
  var jsonData = JSON.parse(xmlParser.toJson(svgFile));
  return jsonData;
}

var standDataExtractor = function(pathDataStruct, type) {
  var stand = {};

  if (pathDataStruct.keys) {
    stand = {
        id: pathDataStruct.id,
        name: pathDataStruct.id,
        keywords: pathDataStruct.keys.split(',')
        // ... respo + time
    };
  } else {
    stand = {
        id: 'wall'
    };
  }

  if (type == 'path') {
    stand["path"] = pathDataStruct.d;
  } else {
    var element = {
      type:'element',
      name:type,
      attributes: pathDataStruct
    }
    stand["path"] = toPath(element);
  }
  return stand;
}

var standsDataExtractor = function(gDataStruct) {
  var shapeTypes =  { 'rect' : 0, 'circle' : 0, 'ellipse' : 0, 'line' : 0, 'polyline' : 0, 'polygon': 0, 'path': 0};
  var stands = [];
  var walls = [];

  if (gDataStruct) {
    for (const type in shapeTypes) {
      if (gDataStruct[type]) {
        shapeTypes[type] = gDataStruct[type].length;

        for (const index in gDataStruct[type]) {
          let shape = standDataExtractor(gDataStruct[type][index], type);
          if (shape.id=='wall')
            walls.push(shape);
          else
            stands.push(shape);
        }

      }
    }
  }
  return {stands, walls};
}

var floorDataExtractor = function (svgFloorFilePath) {
  let floorJson = svgFileReader(svgFloorFilePath);
  let {stands, walls} = standsDataExtractor(floorJson.svg.g);

  var floor = {
      name: floorJson.svg.title,
      planShape: walls,
      stands: stands
  };

  return floor;
}
