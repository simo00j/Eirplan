var multer = require('multer')
var path = require('path')

//configurating multer 

var uploads = multer({storage: multer.diskStorage({

    destination: function (req, file, callback) 
    { 
      callback(null, './uploads');
    },
    filename: function (req, file, callback) 
    { 
      callback(null, (Date.now()+'_'+file.originalname));
    }
  
  }),
  
  fileFilter: function(req, file, callback) {
    var ext = path.extname(file.originalname)
    if (ext !== '.xml' && ext !== '.svg' && ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
      return callback(/*res.end('Only images or svg files are allowed ')*/ null, false)
    }
    callback(null, true)
  }
  });
  module.exports = uploads;