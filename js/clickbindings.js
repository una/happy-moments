// expects an instance of momentChanger from moments.js
module.exports = function(momentChanger) {
  'use strict';
  document.querySelector('.date--rand').addEventListener('click', function(e) {
    momentChanger.randomMoment();
  });

  document.querySelector('.date--next').addEventListener('click', function(e) {
    momentChanger.nextMoment();
  });

  document.querySelector('.date--prev').addEventListener('click', function(e) {
    momentChanger.prevMoment();
  });
};