const routes = require('./lib.js');

module.exports = function (app){
    app.post('/add',routes.add);
    app.get('/event',routes.event);
    app.get('/eventid',routes.eventid);
    //app.get('/send',routes.send);

}