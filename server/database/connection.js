const mongoose = require('mongoose');
//configure mongodb connection
const con = function (usr = 'admin', pwd = 'randompassword', dbName = 'Eirplan') {
  mongoose.connect('mongodb+srv://'+usr+':'+pwd+'@eirplan.gdcbx.mongodb.net/'+dbName+'?retryWrites=true&w=majority',
  { 
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(client => {
    console.log('Succesfully connected to MongoDB Database !')
    })
  .catch(error => {
    console.log('connection failed to the MongoDB Database !')
    console.error(error)
    });
}

exports.con = con;
