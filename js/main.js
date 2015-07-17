var moments = require('./moments');
var canvas = require('./canvas');
var fonts = require('./fonts');
var keys = require('./keybindings'); // the result of keys is a function that accepts momentChanger as a argument
var clicks = require('./clickbindings');

var request = new XMLHttpRequest();
request.open('GET', '/json-list', true);

request.onload = function() {
  'use strict';
  if (request.status >= 200 && request.status < 400) {
    var data = JSON.parse(request.responseText);
    var getMoment = moments(data);
    keys(getMoment);
    clicks(getMoment);

  } else {
    console.log('we can\'t find the happy moments :(');
  }
};

request.onerror = function() {
  'use strict';
  document.querySelector('.moment--text').innerHTML = 'connection error';
};

request.send();