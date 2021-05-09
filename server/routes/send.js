const express = require('express');
const cors = require('cors');
var path = require('path');
const dbModels = require('../database/dbModels');

const router = express.Router();
//use cors middleware to send the data to the frontend 
router.get('/', cors(), async (req,res) => {
    try{
        const Event = await dbModels.find();
        res.status(200).json({
            data:Event
        })
        res.sendFile(path.resolve(__dirname + '/../interface/finalPage.html'))
 
} catch(err) {
        res.status(404).send(err);
    }
}); 


module.exports = router ; 