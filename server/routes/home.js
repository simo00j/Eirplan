const express = require('express');
const router = express.Router();
var path = require('path');
//display homepage
router.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname + '/../interface/homePage.html'))
  }); 

module.exports = router ; 