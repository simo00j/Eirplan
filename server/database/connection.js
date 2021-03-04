const mongoose = require('mongoose');

const con = function (usr = 'admin', pwd = 'randompassword', dbName = 'Eirplan') {
  mongoose.connect('mongodb+srv://'+usr+':'+pwd+'@eirplan.gdcbx.mongodb.net/'+dbName+'?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Succesfully connected to MongoDB Database !'))
  .catch(() => console.log('connection failed to the MongoDB Database !'));
}

exports.con = con;
