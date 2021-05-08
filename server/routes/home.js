const express = require('express');
const router = express.Router();
var path = require('path');
//display homepage
router.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname + '/../interface/index.html'))
  }); 

module.exports = router ; 