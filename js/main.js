var moments = require('./moments');
var canvas = require('./canvas');
var fonts = require('./fonts');
var keys = require('./keybindings');

var request = new XMLHttpRequest();
request.open('GET', '/json-list', true);

request.onload = function() {
  'use strict';
  if (request.status >= 200 && request.status < 400) {
    var data = JSON.parse(request.responseText);
    moments(data);
    keys();

  } else {
    console.log('we can\'t find the happy moments :(');
  }
};

request.onerror = function() {
  'use strict';
  document.querySelector('.moment--text').innerHTML = 'connection error';
};

request.send();