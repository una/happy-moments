// expects an instance of momentChanger from moments.js
module.exports = function(momentChanger) {
  'use strict';
  var unicode;

  document.onkeydown = function(e) {
    e.preventDefault();
    unicode = e.keyCode ? e.keyCode : e.charCode;

    if(unicode === 32) {
      console.log('space');
      momentChanger.randomMoment();
    }

    if(unicode === 39) {
      console.log('rarr');
      momentChanger.nextMoment();
    }

    if(unicode === 37) {
      console.log('larr');
      momentChanger.prevMoment();
    }
  };
};