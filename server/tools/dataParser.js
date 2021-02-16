var xmlParser = require('xml2json');
const toPath = require('element-to-path');
var fs = require('fs-extra');


var svgFileReader = function (svgFilePath) {
  var svgFile = fs.readFileSync(svgFilePath, 'utf8');
  var jsonData = JSON.parse(xmlParser.toJson(svgFile));
  return jsonData;
}

var standDataExtractor = function(pathDataStruct, isPath) {
  var stand = {};
  var isWall = false;

  if (pathDataStruct.keys) {
    stand = {
        id: pathDataStruct.id,
        name: pathDataStruct.id,
        keywords: pathDataStruct.keys.split(',')
        // ... respo + time
    };
  } else {
    isWall = true;
    stand = {
        id: 'wall',
    };
  }

  if (isPath) {
    stand["path"] = pathDataStruct.d;
  } else {
    stand["path"] = toPath(pathDataStruct);
  }
  return {stand, isWall};
}

var standsDataExtractor = function(gDataStruct) {
  var shapeTypes =  { 'rect' : 0, 'circle' : 0, 'ellipse' : 0, 'line' : 0, 'polyline' : 0, 'polygon': 0, 'path': 0};
  var stands = [];
  var walls = [];

  if (gDataSet) {
    for (const type in shapeTypes) {
      if (gDataStruct[type]) {
        //shapeTypes[type] = gDataStruct[type].length;
        //console.log(type+ ':' + shapeTypes[type]);

        for (const index in shapeTypes[type]) {
          let {shape, isWall} = standDataExtractor(shapeTypes[type][index], (type=='path'));
          if (isWall)
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
