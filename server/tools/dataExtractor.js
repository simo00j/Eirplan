const toPath = require('element-to-path');
const fileReader = require('./fileReader');
const Event = require('../database/dbModels');
// function that allows to parse key from "key1,key2...keyn" to [key1,key2,...,keyn]
var keysParser = function (keys) {
  var keysArray = [];
  for (let k of keys) {
    keysArray.push( {
                      name: k
                    });
  }  
  return keysArray;
}

// extract data from the jason fomat
var standDataExtractor = function (pathDataStruct, type) {
  var stand = {};

  if (pathDataStruct.keys) {
    stand = {
        id: pathDataStruct.id,
        name: pathDataStruct.id,
        respo: pathDataStruct.respo,
        keywords: keysParser(pathDataStruct.keys.split(',')),
        starthour: pathDataStruct.starthour,
        endhour: pathDataStruct.endhour,
        resume: pathDataStruct.resume       
    };
  } else {      
    stand = {
        id: 'wall'
    };
    if (pathDataStruct["stroke-width"]) {
      stand["strokeWidth"] = pathDataStruct["stroke-width"];
    } else {
      stand["strokeWidth"] = "None";
    }
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

var nameDataExtractor = function (nameStruct) {
  var name = {
    label: nameStruct["$t"],
    x: nameStruct["x"],
    y: nameStruct["y"],
    fontSize: nameStruct["font-size"]
  }
  return name;
}

var standsDataExtractor = function (gDataStruct) {
  var shapeTypes =  { 'rect' : 0, 'circle' : 0, 'ellipse' : 0, 'line' : 0, 'polyline' : 0, 'polygon': 0, 'path': 0};
  var stands = [];
  var walls = [];
  var names = [];

  if (gDataStruct) {
    for (const type in shapeTypes) {
      if (gDataStruct[type]) {
        if (Symbol.iterator in Object(gDataStruct[type])){
          shapeTypes[type] = gDataStruct[type].length;
          for (const index in gDataStruct[type]) {
            let shape = standDataExtractor(gDataStruct[type][index], type);
            if (shape.id=='wall')
              walls.push(shape);
            else
              stands.push(shape);
          }}
        else {
          let shape = standDataExtractor(gDataStruct[type], type);
            if (shape.id=='wall')
              walls.push(shape);
            else
              stands.push(shape);
        }

      }
    }
    if (gDataStruct['text']) {
      if (Symbol.iterator in Object(gDataStruct['text'])) {
        for (const index in gDataStruct['text']) {
          let name = nameDataExtractor(gDataStruct['text'][index]);
          names.push(name);
        }
      } else {
        let name = nameDataExtractor(gDataStruct['text']);
        names.push(name);
      }
    }
    if (gDataStruct['g']) {
      if (Symbol.iterator in Object(gDataStruct['g'])) {
        for (let g of gDataStruct['g']) {
          let data = standsDataExtractor(g);
          stands.push.apply(stands, data[0]);
          walls.push.apply(walls, data[1]);
          names.push.apply(names, data[2]);
        }
      } else {
        let data = standsDataExtractor(gDataStruct['g'])
        console.log(data[1])
        stands.push.apply(stands, data[0]);
        walls.push.apply(walls, data[1]);
        names.push.apply(names, data[2]);
        console.log(walls)
      }
    }
  }
  return [stands, walls, names];
}

var floorDataExtractor = function (svgFloorFile) {
  let floorJson = fileReader(svgFloorFile);

  if (Symbol.iterator in Object(floorJson.svg.g)) {
    var allStands = [], allWalls = [], allNames = [];
    for (let g of floorJson.svg.g) {
      let data = standsDataExtractor(g);
      allStands.push.apply(allStands, data[0]);
      allWalls.push.apply(allWalls, data[1]);
      allNames.push.apply(allNames, data[2]);
    } 
    var floor = {
      name: floorJson.svg.title,
      planShape: allWalls,
      stands: allStands,
      names: allNames
    };
  }
  else {
    let data = standsDataExtractor(floorJson.svg.g);
    var floor = {
      name: floorJson.svg.title,
      planShape: data[1],
      stands: data[0],
      names: data[2]
    };
  }
   

  return floor;
}
// function that returns keyword stats need to be called after creating model (it uses the models ids)
var keywordStatExtractor = function(floors) {
  const list = [];
  const nbFloors = floors.length;
  for( i=0;i<nbFloors;i++){
      const floor = floors[i];
      for(let j = 0;j<floor.stands.length;j++){
          const st = floor.stands[j];
          for(let k =0;k<st.keywords.length;k++){
              const key = st.keywords[k]
              const status =exist(list,key);
              if(status > -1){
                list[status].standList.push({standId:st._id,name:st.name});
                list[status].frequency+=1;
              }
              else {
                  
                  list.push({keywordId:key._id, name:key.name, standList:[{standId:st._id, name:st.name}], frequency:1})
              }
          }
      } 
  }
  return list;
}


var exist = function(list,key){
  for (let i= 0;i<list.length;i++){
    const status =list[i].name.localeCompare(key.name, undefined, { sensitivity: 'accent' });
      if(!status){
          return i;
      }
  }
  return -1;
}

exports.floorDataExtractor = floorDataExtractor;
exports.keywordStatExtractor=keywordStatExtractor;