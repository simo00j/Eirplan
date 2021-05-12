const express = require('express');
var path = require('path');
const dbModels = require('../database/dbModels');

const router = express.Router();
//fetsh the last event in the database 
router.get('/', async (req, res) => {
  try{
    const Event = await dbModels.find();
    console.log(Event);
  } catch(err) {
    console.log(err);
  }
  res.sendFile(path.resolve(__dirname + '/../interface/finalPage.html'));
}); 
// search for event by id 
router.get("/eventid", async (req, res) => {
    try {
      const Event=await dbModels.findById(req.query.eventId);
      console.log(Event);
    }catch(err ){
      console.log(err);
   }
 }); 

module.exports = router; 