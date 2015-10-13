var express = require('express');
var app = express();

var db = require('./db.json');

app.set('port', (process.env.PORT || 5000));

app.get('/api', function(req, res){
	res.send(db);
});
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});