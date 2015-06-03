'use strict';

var express = require('express');
var app = express();
var request = require("request");
var json, count, date, moment;

app.use(express.static(__dirname + '/', { extensions: ['html'] }));
app.use(express.static(__dirname + 'public'));

request.get("https://www.kimonolabs.com/api/2mf3bjrq?apikey=txL7B070QkLk5HPTGs915wNTSQP7jqi6",
function(err, response, body) {
  json = JSON.parse(body);
  count = json.count;
  var n = Math.floor(Math.random()*count);
  date = json.results.happyMoments[n].date.text;
  moment = json.results.happyMoments[n].moment;
  console.log(n, count, date, moment);

});

app.get('/', function(req, res){
  res.send('./public/index.html');
});

// Ractive stuff

// var Ractive = require('ractive');

// var ractive = new Ractive({
//     template: 'hello from {{who}}'
// });

// ractive.set('who', 'node');
// console.log(ractive.toHTML());

// API Request



