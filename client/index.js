const express = require('express');
const axios = require('axios');
const app = express();
const port = 3008;
const path = require('path');
const getData = require('./tools/httpQ');

const burl = "http://localhost:3000";

app.get('/', async (req, res) => {
  try {
    let data = await getData();
    console.log(data);
  } catch (error) {
    console.log('fetchCloudData error:', error);
  }
  res.sendFile(path.resolve(__dirname + '/interface/index.html'));
});

app.listen(port, () => {
  console.log(`listening at ${port}`);
});



