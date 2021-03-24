const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
var path= require('path');
const dbModels = require('../database/dbModels');


router.get('/',async (req,res) => {
try{
  const Event = await dbModels.find();
  console.log(Event);
}catch(err){
  console.log(err);
}
res.sendFile(path.resolve(__dirname + '/../interface/index3.html'))

}); 

router.get("/eventid", async (req, res) => {
    try {
      const Event=await dbModels.findById(req.query.eventId);
      console.log(Event);
    }catch(err ){
       console.log(err);
   }
 }); 


module.exports = router ; 