const connect = require ('./database/connection');
const dataExt = require('./tools/dataExtractor');
const express = require('express');
const fs = require('fs-extra');
const app = express();

connect.con();


app.listen(3000, function() {
  console.log('listening on 3000');
});



app.get('/', function(req, res) {
  res.send('Hello World');
  var floor = dataExt.floorDataExtractor(`C:\Users\redac\Documents\EDT\PFA\free-PFA\free-PFA\testSamples\sample1.xml`);
  fs.writeFileSync('sample1.json', floor);
  res.send(floor.name);
});
