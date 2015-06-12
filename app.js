'use strict';

var express = require('express');
var app = express();
var request = require('request');
var fs = require('fs');
var json, key, count, date, moment;

//API Key
fs.readFile('./key.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  key = data;
});

app.use(express.static(__dirname + '/', { extensions: ['html'] }));
app.use(express.static(__dirname + '/public'));

// API Request
app.get('/', function(req, res){
  res.send('index.html');
});

// creating json list asset
app.get('/json-list', function(req, res){
  request.get('https://www.kimonolabs.com/api/2mf3bjrq?apikey='+ key,
  function(err, response, body) {
    json = JSON.parse(body);
    res.json(json);
  });
});

// sending every url that doesn't exist
app.get('*', function(req, res){
  res.status(400).send('err404.html');
});


app.listen(process.env.PORT || 3000, function(){
  console.log('Express server listening on port %d in %s mode', this.address().port, app.settings.env);
});
