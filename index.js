var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());
// var allowCrossDomain = function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

//     // intercept OPTIONS method
//     if ('OPTIONS' == req.method) {
//       res.send(200);
//     }
//     else {
//       next();
//     }
// };
// app.configure(function(){
//   app.use(allowCrossDomain);
// });


var db = require('./db.json');

app.set('port', (process.env.PORT || 5000));

app.get('/api', function(req, res){
	res.send(db);
});
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});