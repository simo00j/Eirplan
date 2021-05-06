const express = require('express');
const dataExt = require('../tools/dataExtractor');
const dbModels = require('../database/dbModels');
const logoupload = require('../database/Uploaderconfig');
const fs = require('fs');
const router = express.Router();
var path= require('path');
const xmlParser = require('xml2json');

router.get('/',(req,res) => {
    res.sendFile(path.resolve(__dirname + '/../interface/index2.html'))
}); 


router.post('/addEvent',logoupload.any(),(req, res) =>{
  dbModels.collection.deleteMany( {} );
  var floors_number = parseInt(req.body.floors_number, 10),
        floors=[];
  // extract the data files
  for (let i = 2; i <= floors_number+1; i++) {
      floors.push(dataExt.floorDataExtractor(req.files[i].path));
  }
  
  //fill the event
  var event = new dbModels ({
    name: req.body.eventname,
    logoEvent:req.files[0].path,
    logoHost:req.files[1].path,
    floors: floors
  });
  console.log(event);
  event.save(function(err) {
    if(err){
      console.log(err);
    }
    console.log("added sucessfully");
    res.sendFile(path.resolve(__dirname + '/../interface/index3.html'));
  });

});

module.exports = router ; 