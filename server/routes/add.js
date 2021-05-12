const express = require('express');
const dataExt = require('../tools/dataExtractor');
const dbModels = require('../database/dbModels');
const logoupload = require('../database/Uploaderconfig');
const fs = require('fs');
const router = express.Router();
var path= require('path');
const xmlParser = require('xml2json');

router.get('/',(req,res) => {
    res.sendFile(path.resolve(__dirname + '/../interface/formPage.html'))
}); 

//using logoupload as a midleware to store the req files in the uploads folder
router.post('/addEvent',logoupload.any(),(req, res) =>{
  dbModels.collection.deleteMany( {} );
  var floors_number = parseInt(req.body.floors_number, 10),
        floors=[];
  // extract floors data 
  for (let i = 2; i <= floors_number+1; i++) {
      floors.push(dataExt.floorDataExtractor(req.files[i].path));
  }
  //fill the event
  var event = new dbModels ({
    name: req.body.eventname,
    logoEvent:req.files[0].path,
    logoHost:req.files[1].path,
    floors: floors,
    keywordsStats: []
  });
   // fill keyword stats 
  event.keywordsStats = dataExt.keywordStatExtractor (event.floors);
  //send event to database 
  
  event.save(function(err) {
    if(err){
      console.log(err);
    }
    console.log("added sucessfully");
    res.sendFile(path.resolve(__dirname + '/../interface/finalPage.html'));
  });
});

module.exports = router ; 