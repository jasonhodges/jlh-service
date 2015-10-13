var express = require('express');
var app = express();

var db = require('./db.json');

app.get('/api', function(req, res){
	res.send('<h1>Hello World!</h2>');
});