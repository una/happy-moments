'use strict';

var express = require('express');
var app = express();
var request = require('request');
var fs = require('fs');
var path = require('path');
var json, key, count, date, moment;

app.set('view engine', 'jade');

if (process.env.NODE_ENV === 'production') {
  key = process.env.KIMONO_KEY;
} else {
  key = fs.readFileSync('./key.txt', 'utf8');
}

app.use(express.static(__dirname + '/public', { extensions: ['html'] }));
app.use(express.static(__dirname + '/public'));

// creating json list asset
app.get('/json-list', function(req, res){
  request.get('https://www.kimonolabs.com/api/2mf3bjrq?apikey=' + key,
  function(err, response, body) {
    json = JSON.parse(body);
    res.json(json);
  });
});

// 404s!
app.use(function(req,res){
  res.sendFile(path.resolve(__dirname, 'public/404.html'));
});

app.listen(process.env.PORT || 3000, function(){
  console.log('Express server listening on port %d in %s mode', this.address().port, app.settings.env);
});
