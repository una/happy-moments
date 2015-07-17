var formatDate = require('./helpers/formatDate');
var getHashNum = require('./helpers/getHashNum');

// using list from API call
module.exports = function(data) {
  var allMoments, count, date, moment, i;
  allMoments = data;
  count = allMoments.count;

  if (getHashNum(window.location.href)) {
    // console.log(getHashNum(window.location.href));
    i = getHashNum(window.location.href);
    updateMoments(i);
  } else {
    randomMoment();
  }

  function randomMoment() {
    i = Math.floor(Math.random()*count);
    updateMoments(i);
  }

  function nextMoment() {
    i++;
    updateMoments(i);
  }

  function prevMoment() {
    i--;
    updateMoments(i);
  }

  function updateMoments(i) {
    date = allMoments.results.happyMoments[i].date.text;
    moment = allMoments.results.happyMoments[i].moment;
    document.querySelector('.moment--text').innerHTML = moment;
    document.querySelector('.moment--date').innerHTML = formatDate(date);
    history.pushState(null, null, '#' + i);
  }

  document.querySelector('.date--rand').addEventListener('click', function(e) {
      randomMoment();
    });

  document.querySelector('.date--next').addEventListener('click', function(e) {
      nextMoment();
    });

  document.querySelector('.date--prev').addEventListener('click', function(e) {
      prevMoment();
    });
};