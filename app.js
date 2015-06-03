'use strict';

var express = require('express');
var app = express();
var request = require("request");
var json;

// app.use('/', express.static(__dirname + '/', { extensions: ['html'] }));
// app.use(express.static(__dirname + '/', { extensions: ['html'] }));
// app.use(express.static(__dirname + 'public'));

// get API stuff

request.get("https://www.kimonolabs.com/api/2mf3bjrq?apikey=txL7B070QkLk5HPTGs915wNTSQP7jqi6",
function(err, response, body) {
  json = JSON.parse(body);
});

app.get('/', function(req, res){
  res.send(json.results.happyMoments[0].date.text);
  // res.send(json.results.happyMoments[0].moment);
});

var server = app.listen(5000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});


// // Ractive stuff

// var Ractive = require('ractive');

// var ractive = new Ractive({
//     template: 'hello from {{who}}'
// });
// ractive.set('who', 'node');
// console.log(ractive.toHTML());

// API Request



