// expects an instance of momentChanger from moments.js
module.exports = function(momentChanger) {
  'use strict';
  var unicode;

  document.onkeydown = function(e) {
    e.preventDefault();
    // same as : unicode = e.keyCode ? e.keyCode : e.charCode;
    unicode = e.keyCode || e.charCode;

    if(unicode === 32) {
      momentChanger.randomMoment();
    }

    if(unicode === 39) {
      momentChanger.nextMoment();
    }

    if(unicode === 37) {
      momentChanger.prevMoment();
    }
  };
};