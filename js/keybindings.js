// var keyChar = require('./helpers/getKey');
var momentChanger = require('./moments.js');

module.exports = function() {
  'use strict';
  var unicode;

  document.onkeydown = function(e) {
    e.preventDefault();
    unicode = e.keyCode ? e.keyCode : e.charCode;
    console.log(unicode);

    if(unicode === 32) {
      console.log('space');
      momentChanger.randomMoment(e);
    }

    if(unicode === 39) {
      console.log('rarr');
      momentChanger.nextMoment(e);
    }

    if(unicode === 37) {
      console.log('larr');
      momentChanger.prevMoment(e);
    }
  };
};