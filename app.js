'use strict';

var express = require('express');
var app = express();
var request = require("request");
var json, count, date, moment;

app.use(express.static(__dirname + '/', { extensions: ['html'] }));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.send('./public/index.html');
});

app.get('/json-list', function(req, res){
  request.get("https://www.kimonolabs.com/api/2mf3bjrq?apikey=txL7B070QkLk5HPTGs915wNTSQP7jqi6",
  function(err, response, body) {
    json = JSON.parse(body);
    res.json(json);
  });
});

var host = (process.env.VCAP_APP_HOST || 'localhost');
var port = (process.env.VCAP_APP_PORT || 3000);

app.listen(port, host);
console.log('App started on port: ' + port);