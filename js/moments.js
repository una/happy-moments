var formatDate = require('./helpers/formatDate');
var getHashNum = require('./helpers/getHashNum');

// using list from API call
module.exports = function(data) {

  var allMoments, count, date, moment, i;
  allMoments = data;
  count = allMoments.count;

  var randomMoment = function() {
    i = Math.floor(Math.random()*count);
    return updateMoments(i);
  };

  var nextMoment = function() {
    i++;
    return updateMoments(i);
  };

  var prevMoment = function() {
    i--;
    return updateMoments(i);
  };

  if (getHashNum(window.location.href)) {
    i = getHashNum(window.location.href);
    updateMoments(i);
  } else {
    randomMoment();
  }

  function updateMoments(i) {
    date = allMoments.results.happyMoments[i].date;
    moment = allMoments.results.happyMoments[i].moment;
    document.querySelector('.moment--text').innerHTML = moment;
    document.querySelector('.moment--date').innerHTML = formatDate(date);
    history.pushState(null, null, '#' + i);
  }

  return {
    prevMoment: prevMoment,
    randomMoment: randomMoment,
    nextMoment: nextMoment
  };
};