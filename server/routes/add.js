const express = require('express');
const dataExt = require('../tools/dataExtractor');
const dbModels = require('../database/dbModels');
const fs = require('fs');
const router = express.Router();
var path= require('path');
const xmlParser = require('xml2json');


router.get('/',(req,res) => {
    res.sendFile(path.resolve(__dirname + '/../interface/index2.html'))
}); 



router.post('/addEvent',(req, res) =>{
  dbModels.collection.deleteMany( {} );
  var floors_number = parseInt(req.body.floors_number, 10),
       logopath = req.files.logopath,
        hostpath = req.files.hostpath,
        floors=[];
  // extract the data files
  for (let i = 1; i <= floors_number; i++) {
      floors.push(dataExt.floorDataExtractor(req.files[i]));
  }
  //fill the event
  var event = new dbModels ({
    name: req.body.eventname,
    //logoEvent:logopath.name,
    //logoHost:hostpath.name,
    floors: floors
  });
  event.save(function(err) {
    if(err){
      console.log(err);
    }
    console.log("added sucessfully");
    res.sendFile(path.resolve(__dirname + '/../interface/index3.html'));
  });

});

module.exports = router ; 