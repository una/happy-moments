'use strict';

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/', { extensions: ['html'] }));
app.use(express.static(__dirname + 'public'));

app.get('/', function(req, res) {
  res.sendFile('./public/index.html');
});


var host = (process.env.VCAP_APP_HOST || 'localhost');
var port = (process.env.VCAP_APP_PORT || 5000);

app.listen(port, host);
console.log('App started on port ' + port);

// Ractive stuff

var Ractive = require('ractive');

var ractive = new Ractive({
    template: 'hello from {{who}}'
});
ractive.set('who', 'node');
console.log(ractive.toHTML());

// API Request
var request = require('request');

request("https://www.kimonolabs.com/api/2mf3bjrq?apikey=txL7B070QkLk5HPTGs915wNTSQP7jqi6",
function(err, response, body) {
  console.log(body);
});