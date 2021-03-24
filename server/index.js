const connect = require ('./database/connection');
const bodyParser= require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const upload = require('express-fileupload');
const app = express();

//connection
connect.con();
const db = mongoose.connection; 

//bodyparser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(upload());

//import routes 
const eventroutes = require('./routes/event')
const addroutes = require('./routes/add')
const homeroute = require('./routes/home')

//set routes
app.use('/',homeroute);
app.use('/add',addroutes);
app.use('/event',eventroutes);


//listin to port 
app.listen(3000, function() {
  console.log('listening on 3000');
});

