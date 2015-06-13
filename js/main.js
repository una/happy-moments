var getHashNum = require('./helpers/getHashNum');
var moments = require('./moments');
var canvas = require('./canvas');
var fonts = require('./fonts');

var request = new XMLHttpRequest();
request.open('GET', '/json-list', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    var data = JSON.parse(request.responseText);
    moments(data);

  } else {
    console.log('we can\'t find the happy moments :(');
  }
};

request.onerror = function() {
  document.querySelector('.moment--text').innerHTML = 'connection error';
};

request.send();