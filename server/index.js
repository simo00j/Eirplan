const connect = require ('./database/connection');
const bodyParser= require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const upload = require('express-fileupload');
const cors = require('cors');
const app = express();
const port = 8800;

//connection
connect.con();
const db = mongoose.connection; 

//bodyparser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(upload());
/*
//import routes 
const eventroutes = require('./routes/event')
const addroutes = require('./routes/add')
const homeroute = require('./routes/home')
const sendroutes = require('./routes/send')
*/

//Définition des CORS
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
//set routes 
/*app.use('/', homeroute);
app.use('/add', addroutes);
app.use('/event', eventroutes);
app.use('/send', sendroutes);
*/
//Définition du routeur
const router = express.Router();
app.use("/user", router);
require(__dirname + "/controllers/controller")(router);

//listen to port 
app.listen(port, () => {
  console.log('listening on 8800');
});

