const toPath = require('element-to-path');
const fileReader = require('./fileReader');
const Event = require('../database/dbModels');

var standDataExtractor = function (pathDataStruct, type) {
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

var standsDataExtractor = function (gDataStruct) {
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
  let floorJson = fileReader(svgFloorFilePath);
  let {stands, walls} = standsDataExtractor(floorJson.svg.g);

  var floor = {
      name: floorJson.svg.title,
      planShape: walls,
      stands: stands
  };

  return floor;
}

var eventDataExtractor = function (xmlEventFilePath) {
  let eventJson = fileReader(xmlEventFilePath);
  let floors = [];

  for (const floorFilePath of eventJson.floors) {
    var floor = floorDataExtractor(floorFilePath);
    floors.push(floor);
  }

  var event = new Event ({
    _id: new mongoose.Types.ObjectId(),
    name: eventJson.name,
    logoEvent: eventJson.logoEventPath,
    logoHost: eventJson.logoHostPath,
    floors: floors
  });

  return event;
}

exports.floorDataExtractor = floorDataExtractor;
exports.eventDataExtractor = eventDataExtractor;
