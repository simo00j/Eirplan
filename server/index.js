const connect = require ('./database/connection');
const bodyParser= require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const upload = require('express-fileupload');
const cors = require('cors');
const app = express();
const port = 3000;

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
const sendroutes = require('./routes/send')

//set routes 
app.use('/', homeroute);
app.use('/add', addroutes);
app.use('/event', eventroutes);
app.use('/send', sendroutes);


//listen to port 
app.listen(port, () => {
  console.log('listening on 3000');
});

